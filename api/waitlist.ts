import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim())
}

async function notionFetch(path: string, method: string, body?: object) {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  return res.json() as Promise<Record<string, unknown>>
}

async function isDuplicate(email: string): Promise<boolean> {
  const data = await notionFetch(`/databases/${NOTION_DATABASE_ID}/query`, 'POST', {
    filter: { property: 'Email ID', title: { equals: email.toLowerCase().trim() } },
    page_size: 1,
  })
  const results = data.results as unknown[]
  return Array.isArray(results) && results.length > 0
}

function richText(value: string) {
  return { rich_text: [{ text: { content: value.slice(0, 2000) } }] }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID env vars')
    return res.status(500).json({ error: 'Server misconfiguration.' })
  }

  const {
    email,
    youtubeChannelUrl,
    _hp,
    pageUrl,
    referrer,
    utmSource,
    utmCampaign,
  } = req.body as Record<string, string>

  // Honeypot: silently accept so bots don't know they failed
  if (_hp) {
    return res.status(200).json({ ok: true })
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' })
  }

  try {
    if (await isDuplicate(email)) {
      return res.status(409).json({ error: 'already_on_waitlist' })
    }

    // Derive a readable source label from the page URL path
    let sourceLabel = 'Website'
    if (pageUrl) {
      try {
        const path = new URL(pageUrl).pathname
        if (path === '/' || path === '') sourceLabel = 'Home'
        else if (path.includes('early-access')) sourceLabel = 'Early Access'
        else if (path.includes('pricing')) sourceLabel = 'Pricing'
        else if (path.includes('for-teams')) sourceLabel = 'For Teams'
      } catch { /* ignore invalid URL */ }
    }

    const properties: Record<string, unknown> = {
      'Email ID': { title: [{ text: { content: email.toLowerCase().trim() } }] },
      'Created at': { date: { start: new Date().toISOString() } },
      'Status': { select: { name: 'Waitlist' } },
      'Source': { select: { name: sourceLabel } },
    }

    if (youtubeChannelUrl?.trim()) {
      properties['Youtube Channel URL'] = { url: youtubeChannelUrl.trim() }
    }
    if (referrer?.trim()) {
      properties['Referrer Code'] = richText(referrer.trim())
    }
    if (utmSource?.trim()) {
      properties['UTM Source'] = richText(utmSource.trim())
    }
    if (utmCampaign?.trim()) {
      properties['UTM Campaign'] = richText(utmCampaign.trim())
    }

    const result = await notionFetch('/pages', 'POST', {
      parent: { database_id: NOTION_DATABASE_ID },
      properties,
    })

    if (result.object === 'error') {
      console.error('Notion error:', result)
      return res.status(500).json({ error: 'Failed to save. Please try again.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Waitlist handler error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
