import { Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import BoomerangVideoBg from '../components/BoomerangVideoBg'
import { Reveal } from '../components/Reveal'
import { WaitlistForm } from '../components/WaitlistForm'

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4'

const features = [
  {
    id: 'edit',
    badge: 'Transcript-First Editing',
    headline: 'Edit by talking,\nnot clicking.',
    body: 'Read your video like a document. Delete a sentence — the footage disappears. No timecodes, no scrubbing, no wasted hours hunting for the take you want.',
    bullets: ['Delete words, delete footage', 'Filler word removal in one click', 'Multi-language transcription', 'Low-confidence word highlighting'],
    side: 'right',
    visual: (
      <div className="mockup-frame p-4 space-y-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-xs font-mono" style={{ color: '#7a8a76' }}>transcript.vivido</span>
        </div>
        {[
          { text: "So today we're going to talk about", strike: false },
          { text: 'um, uh, the new camera setup that I', strike: true },
          { text: "built last month and honestly it's been", strike: false },
          { text: 'like a game changer for my workflow.', strike: false },
        ].map((line, i) => (
          <div key={i} className={`flex items-center gap-2 rounded px-2 py-1 text-sm ${line.strike ? 'bg-red-50' : ''}`}>
            <span className="text-xs w-6 text-right font-mono" style={{ color: '#7a8a76' }}>{i + 1}</span>
            <span className={line.strike ? 'line-through text-red-400' : ''} style={line.strike ? {} : { color: '#1f2a1d' }}>{line.text}</span>
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2 text-xs pt-3" style={{ borderTop: '1px solid #D8D5CC' }}>
          <span className="font-medium" style={{ color: '#336443' }}>3 filler words removed · 00:04 saved</span>
        </div>
      </div>
    ),
  },
  {
    id: 'record',
    badge: 'Built-in Studio',
    headline: 'Your studio,\nbuilt in.',
    body: 'Record screen, webcam, or both — directly inside Vivido. No third-party recorder. No import step. Your footage is on disk before you finish recording.',
    bullets: ['Screen + webcam simultaneously', 'Local-first — files on your machine', 'Auto-project creation on stop', 'WAV audio, never compressed at capture'],
    side: 'left',
    visual: (
      <div className="mockup-frame p-5">
        <div className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#2d3a2a' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-moss/20 to-transparent" />
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ border: '2px solid rgba(133,171,139,0.5)' }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(133,171,139,0.15)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="#85AB8B"/>
                <circle cx="12" cy="12" r="9" stroke="#85AB8B" strokeWidth="1.5" strokeDasharray="4 2"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-mono" style={{ color: 'rgba(133,171,139,0.9)' }}>REC 00:03:42</span>
            </div>
            <span className="text-xs" style={{ color: 'rgba(133,171,139,0.7)' }}>4K · 60fps · WAV</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          {['Screen', 'Webcam', 'Both'].map((opt, i) => (
            <button key={opt} className={`flex-1 text-xs py-2 rounded-lg border transition-colors ${i === 2 ? 'border-moss text-moss bg-moss/5' : 'border-border'}`} style={i !== 2 ? { color: '#4b5b47' } : {}}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'sentinel-audio',
    badge: 'Sentinel Audio™',
    headline: 'Sound like a studio.\nAutomatically.',
    body: 'Sentinel Audio runs silently — removing noise, normalizing loudness for every platform, and ducking your music when you speak. Before you even notice the problem.',
    bullets: ['AI noise removal with A/B preview', 'Platform-specific loudness (YouTube, Shorts, Podcast)', 'Automatic voice-over music ducking', 'EQ presets by content type'],
    side: 'right',
    visual: (
      <div className="mockup-frame p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-moss flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
            Sentinel Audio™ Active
          </span>
          <span className="text-xs" style={{ color: '#7a8a76' }}>Processing</span>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Noise Removal', before: 'Fan hum detected', after: 'Removed' },
            { label: 'Loudness',      before: '-8 LUFS',          after: '-14 LUFS (YouTube)' },
            { label: 'Music Duck',    before: 'Manual',           after: 'Auto −12dB' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-28 text-xs shrink-0" style={{ color: '#4b5b47' }}>{item.label}</div>
              <div className="flex-1 flex items-center gap-2 text-xs">
                <span className="line-through" style={{ color: '#7a8a76' }}>{item.before}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M7 3l3 3-3 3" stroke="#336443" strokeWidth="1.2" strokeLinecap="round"/></svg>
                <span className="text-moss font-medium">{item.after}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-bg rounded-lg p-3">
          <div className="flex gap-0.5 items-end h-8">
            {Array.from({ length: 48 }, (_, i) => (
              <div key={i} className="flex-1 rounded-sm bg-moss/50" style={{ height: `${Math.sin(i * 0.4) * 40 + 60}%` }} />
            ))}
          </div>
          <p className="text-xs text-center mt-2" style={{ color: '#4b5b47' }}>Waveform after Sentinel</p>
        </div>
      </div>
    ),
  },
  {
    id: 'repurpose',
    badge: 'One-Click Repurpose',
    headline: 'One video,\neverywhere.',
    body: 'Mark a moment as a Short. Flag a clip for Instagram. Vivido adapts the format, reframes for vertical, and generates platform-specific metadata — without re-editing from scratch.',
    bullets: ['Shorts markers directly in timeline', 'Auto-reframe for vertical formats', 'Platform-specific metadata per clip', 'Chapter markers for YouTube'],
    side: 'left',
    visual: (
      <div className="mockup-frame p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { platform: 'YouTube',   color: 'border-red-300/50 bg-red-50',  status: 'Ready' },
            { platform: 'Shorts',    color: 'border-red-300/50 bg-red-50',  status: 'Reframing' },
            { platform: 'Instagram', color: 'border-fern/30 bg-fern/5',     status: 'Ready' },
          ].map((p) => (
            <div key={p.platform} className={`border rounded-xl p-3 text-center ${p.color}`}>
              <div className="aspect-video bg-bg/60 rounded mb-2 flex items-center justify-center">
                <Play className="w-4 h-4" style={{ color: '#7a8a76', fill: '#7a8a76' }} />
              </div>
              <p className="text-xs font-medium" style={{ color: '#1f2a1d' }}>{p.platform}</p>
              <p className="text-[10px] mt-0.5" style={{ color: '#7a8a76' }}>{p.status}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs border-t border-border pt-3">
          <span className="text-moss font-medium">3 formats · 1 source edit</span>
        </div>
      </div>
    ),
  },
  {
    id: 'publish',
    badge: 'Smart Publish',
    headline: 'Write once.\nPublish smart.',
    body: 'AI-suggested titles with CTR scores. Auto-written descriptions. Tag recommendations. Chapter markers. Everything YouTube needs, generated from your content.',
    bullets: ['Title suggestions with CTR score (0–100)', 'AI description writer', 'Tag suggestions from transcript', 'Thumbnail slot in publish package'],
    side: 'right',
    visual: (
      <div className="mockup-frame p-5 space-y-4">
        <div>
          <p className="text-xs mb-2 uppercase tracking-wider" style={{ color: '#7a8a76' }}>Title</p>
          <div className="bg-bg rounded-lg p-3 flex items-center justify-between gap-3">
            <p className="text-sm flex-1" style={{ color: '#1f2a1d' }}>I rebuilt my entire studio for under $500</p>
            <div className="shrink-0 flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-full border-2 border-moss flex items-center justify-center">
                <span className="text-[10px] font-bold text-moss">87</span>
              </div>
              <span className="text-[10px]" style={{ color: '#7a8a76' }}>CTR</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs mb-2 uppercase tracking-wider" style={{ color: '#7a8a76' }}>Tags</p>
          <div className="flex flex-wrap gap-1.5">
            {['studio setup', 'budget studio', 'home studio', 'youtube setup'].map((tag) => (
              <span key={tag} className="text-xs bg-surface border border-border text-sage px-2 py-0.5 rounded-full">{tag}</span>
            ))}
            <button className="text-xs text-moss border border-moss/30 px-2 py-0.5 rounded-full hover:bg-moss/5 transition-colors">+ Add more</button>
          </div>
        </div>
      </div>
    ),
  },
]

function StyleModelSection() {
  return (
    <section id="style-model" className="relative py-32 overflow-hidden" style={{ backgroundColor: '#1f2a1d' }}>
      <div className="absolute inset-0 opacity-10 bg-grid-green" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase mb-6" style={{ color: '#85AB8B', backgroundColor: 'rgba(133,171,139,0.12)', border: '1px solid rgba(133,171,139,0.25)' }}>
              <Sparkles className="w-3 h-3" />
              Vivido Intelligence
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-4xl md:text-6xl font-normal mt-6 leading-[0.95] text-balance"
              style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#ffffff' }}
            >
              Vivido learns how you edit.{' '}
              <span style={{ color: '#85AB8B' }}>Then helps you do it faster.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(133,171,139,0.80)' }}>
              Every project teaches Vivido your style. Your hook length. Your cut rhythm. Your B-roll ratio.
              After five projects, it starts surfacing insights — and helping you replicate what works.
            </p>
          </Reveal>
        </div>
        <Reveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '⏱', label: 'Hook Intelligence', value: '47s avg', desc: 'Opening before first cut', trend: '+3s vs last 5 videos' },
              { icon: '✂️', label: 'Cut Rhythm', value: '2.3s', desc: 'Average clip duration', trend: 'Consistent with your style' },
              { icon: '🎬', label: 'B-Roll Ratio', value: '34%', desc: 'B-roll vs primary camera', trend: 'Up 8% from project 1' },
              { icon: '📊', label: 'Drop-off Point', value: '8:12', desc: 'Where viewers drop off', trend: 'Improving across projects' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl p-6" style={{ backgroundColor: '#2d3a2a', border: '1px solid #2a3827' }}>
                <div className="text-2xl mb-3">{stat.icon}</div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(133,171,139,0.75)' }}>{stat.label}</p>
                <p className="text-3xl font-bold mb-1" style={{ color: '#ffffff' }}>{stat.value}</p>
                <p className="text-xs mb-3" style={{ color: 'rgba(133,171,139,0.75)' }}>{stat.desc}</p>
                <p className="text-xs pt-3" style={{ borderTop: '1px solid #3a4d38', color: '#85AB8B' }}>{stat.trend}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#2d3a2a', border: '1px solid rgba(133,171,139,0.2)' }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-fern animate-pulse-slow" />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#85AB8B' }}>Style Model · Project 8 of ∞</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#ffffff' }}>3 observations about your editing style</h3>
                <ul className="space-y-3">
                  {[
                    'Your hooks under 45s have 23% better retention. Consider tightening this one.',
                    "You've removed filler words in 7 of 8 projects. Sentinel handles this automatically now.",
                    'Your best-performing videos had 38% B-roll. This project is at 29%.',
                  ].map((obs, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'rgba(133,171,139,0.90)' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5" style={{ backgroundColor: 'rgba(133,171,139,0.15)', border: '1px solid rgba(133,171,139,0.35)', color: '#85AB8B' }}>{i + 1}</span>
                      {obs}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 flex flex-col gap-2">
                <button className="font-semibold text-sm py-2.5 px-5 rounded-full transition-colors" style={{ backgroundColor: '#85AB8B', color: '#1f2a1d' }}>Apply suggestions</button>
                <button className="font-medium text-sm py-2.5 px-5 rounded-full transition-colors" style={{ border: '1px solid rgba(133,171,139,0.50)', color: '#85AB8B' }}>Dismiss</button>
                <p className="text-xs text-center" style={{ color: 'rgba(133,171,139,0.60)' }}>You decide. Always.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ForTeamsSection() {
  return (
    <section id="for-teams" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal><span className="section-badge mb-6">For Teams</span></Reveal>
            <Reveal delay={100}>
              <h2
                className="text-3xl md:text-5xl font-normal mt-6 leading-[0.95]"
                style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#1f2a1d' }}
              >
                Your whole team,{' '}
                <span style={{ color: '#336443' }}>one workspace.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-sage mt-6 leading-relaxed">
                Brand kits. Style guides. Shared asset libraries. Every creator on your team edits within your brand — every time — automatically.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 space-y-4">
                {[
                  { label: 'Brand Kit', desc: 'Fonts, colors, logos — applied consistently' },
                  { label: 'Style Guide', desc: 'Your editing style, shared across the team' },
                  { label: 'Shared Library', desc: 'Stock, B-roll, music — one place' },
                  { label: 'Team Handoffs', desc: 'Pass projects without losing context' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-moss/10 border border-moss/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4.5 7.5L8 3" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#1f2a1d' }}>{item.label}</p>
                      <p className="text-sm text-sage">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex items-center gap-4">
                <Link to="/for-teams" className="bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                  Learn more for Teams
                </Link>
                <Link to="/early-access" className="text-sm font-medium text-sage hover:text-forest transition-colors">Join waitlist →</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="mockup-frame p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1f2a1d' }}>Brand Workspace</p>
                  <p className="text-xs text-sage">4 members · 12 projects</p>
                </div>
                <div className="flex -space-x-2">
                  {['A', 'M', 'R', 'J'].map((initial, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-moss/20 border-2 border-surface-elevated flex items-center justify-center text-xs font-semibold text-moss">{initial}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-bg rounded-xl p-4">
                  <p className="text-xs mb-3 uppercase tracking-wider" style={{ color: '#7a8a76' }}>Brand Kit</p>
                  <div className="flex gap-2 mb-3">
                    {['#1f2a1d', '#336443', '#85AB8B', '#FAFAF8'].map((color) => (
                      <div key={color} className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-surface border border-border px-2 py-1 rounded text-sage">Neue Haas Grotesk</span>
                    <span className="bg-surface border border-border px-2 py-1 rounded text-sage">Inter Body</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['Q3 Ep 12', 'Product Demo', 'CEO Interview'].map((proj) => (
                    <div key={proj} className="bg-bg rounded-lg p-2.5">
                      <div className="aspect-video bg-surface rounded mb-1.5" />
                      <p className="text-[10px] text-sage truncate">{proj}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />

        <div className="relative z-10 flex flex-col items-center text-center pt-28 sm:pt-32 lg:pt-72 px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-8" style={{ backgroundColor: 'rgba(51,100,67,0.08)', border: '1px solid rgba(51,100,67,0.18)', color: '#336443' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
            Now accepting early access applications
          </div>
          <h1
            className="font-normal leading-[0.95] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl text-balance"
            style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", sans-serif', letterSpacing: '-0.035em', color: '#336443' }}
          >
            The studio that learns{' '}
            <span style={{ color: '#85AB8B' }}>how you create</span>
          </h1>
          <p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-md rounded-2xl px-5 py-3"
            style={{ color: 'rgba(31,42,29,0.80)', backgroundColor: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.50)' }}
          >
            Record, edit, repurpose, and publish without leaving one app. Native Mac app. No browser. No limits.
          </p>
        </div>

        {/* Bottom-left CTA — frosted glass box so text stays readable over video */}
        <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm rounded-2xl px-5 py-4" style={{ backgroundColor: 'rgba(250,250,248,0.72)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.60)' }}>
          <div className="flex items-center gap-2 mb-2" style={{ color: '#3d5638' }}>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Style Model<sup className="text-[10px]">™</sup></span>
          </div>
          <p className="text-xs leading-relaxed mb-4 max-w-xs font-medium" style={{ color: 'rgba(61,86,56,0.80)' }}>
            Vivido learns your editing style across every project — hook length, cut rhythm, B-roll ratio — and helps you replicate what works.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/early-access" className="text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm" style={{ backgroundColor: '#3d5638' }}>
              Get Early Access
            </Link>
            <Link to="/pricing" className="text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: '#3d5638' }}>
              See pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {features.map((feature) => (
        <section key={feature.id} id={feature.id} className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={feature.side === 'left' ? 'lg:order-2' : ''}>
                <Reveal><span className="section-badge">{feature.badge}</span></Reveal>
                <Reveal delay={100}>
                  <h2
                    className="text-3xl md:text-5xl font-normal mt-6 leading-[0.95] whitespace-pre-line"
                    style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#1f2a1d' }}
                  >
                    {feature.headline}
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-sage mt-5 leading-relaxed text-base md:text-lg">{feature.body}</p>
                </Reveal>
                <Reveal delay={300}>
                  <ul className="mt-8 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-sm text-sage">
                        <div className="w-5 h-5 rounded-full bg-moss/10 border border-moss/30 flex items-center justify-center shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4.5 7.5L8 3" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <Reveal delay={150} className={feature.side === 'left' ? 'lg:order-1' : ''}>
                {feature.visual}
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <StyleModelSection />
      <ForTeamsSection />

      {/* Final CTA */}
      <section className="py-32" style={{ backgroundColor: '#F0EEE8', borderTop: '1px solid #D8D5CC' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal><span className="section-badge mb-6">Coming Soon to Mac</span></Reveal>
          <Reveal delay={100}>
            <h2
              className="text-4xl md:text-6xl font-normal mt-6 leading-[0.95] text-balance"
              style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.035em', color: '#1f2a1d' }}
            >
              Be the first creator{' '}
              <span style={{ color: '#336443' }}>in the studio.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg max-w-lg mx-auto" style={{ color: '#4b5b47' }}>
              Join the waitlist. Lock in early access pricing. Refer 3 friends to jump the queue.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 max-w-md mx-auto">
              <WaitlistForm variant="inline" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
