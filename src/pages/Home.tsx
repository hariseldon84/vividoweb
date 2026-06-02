import { useState } from 'react'
import { Sparkles, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import BoomerangVideoBg from '../components/BoomerangVideoBg'
import { Reveal } from '../components/Reveal'
import { WaitlistForm } from '../components/WaitlistForm'

const BG_VIDEO = '/hero_bg_video.mp4'

const RECORD_MODES = ['Screen', 'Webcam', 'Both'] as const
type RecordMode = typeof RECORD_MODES[number]
const RECORD_VIDEOS: Record<RecordMode, string> = {
  Screen: '/screenonly.mp4',
  Webcam: '/webcamonly.mp4',
  Both:   '/bothwebcamandscreen.mp4',
}

function RecordVisual() {
  const [mode, setMode] = useState<RecordMode>('Webcam')
  const [flashing, setFlashing] = useState(false)

  const switchMode = (next: RecordMode) => {
    if (next === mode) return
    setFlashing(true)
    setTimeout(() => {
      setMode(next)
      setTimeout(() => setFlashing(false), 80)
    }, 100)
  }

  return (
    <div className="mockup-frame p-5">
      <div className="aspect-video rounded-lg relative overflow-hidden" style={{ backgroundColor: '#2d3a2a' }}>
        {/* Pre-mount all 3 — instant channel switch, no reload */}
        {RECORD_MODES.map((m) => (
          <div
            key={m}
            className="absolute inset-0 transition-opacity duration-0"
            style={{ opacity: mode === m ? 1 : 0, pointerEvents: mode === m ? 'auto' : 'none' }}
          >
            <BoomerangVideoBg src={RECORD_VIDEOS[m]} className="absolute inset-0 w-full h-full" />
          </div>
        ))}
        {/* Channel-cut flash */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ backgroundColor: '#000', opacity: flashing ? 1 : 0, transition: flashing ? 'none' : 'opacity 80ms ease' }}
        />
      </div>
      {/* Mode buttons */}
      <div className="flex items-center gap-3 mt-4">
        {RECORD_MODES.map((opt) => (
          <button
            key={opt}
            onClick={() => switchMode(opt)}
            className="flex-1 text-xs py-2 rounded-lg border transition-colors"
            style={mode === opt
              ? { borderColor: '#336443', color: '#336443', backgroundColor: 'rgba(51,100,67,0.06)' }
              : { borderColor: '#D8D5CC', color: '#4b5b47', backgroundColor: 'transparent' }
            }
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    id: 'edit',
    badge: 'Transcript-First Editing',
    headline: 'Edit by talking,\nnot clicking.',
    body: 'Read your video like a document. Delete a sentence — the footage disappears. No timecodes, no scrubbing, no wasted hours hunting for the take you want.',
    bullets: ['Delete words, delete footage', 'Filler word removal in one click', 'Multi-language transcription', 'Low-confidence word highlighting'],
    side: 'right',
    wide: true,
    visual: (
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid #D8D5CC' }}>
        {/* macOS title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3" style={{ backgroundColor: '#F0EEE8', borderBottom: '1px solid #D8D5CC' }}>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.65)' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234,179,8,0.65)' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.65)' }} />
          <span className="ml-2 text-xs font-mono" style={{ color: '#7a8a76' }}>transcript.vivido</span>
        </div>
        {/* Screenshot + bottom stat overlay */}
        <div className="relative">
          <img
            src="/edit_by_talking.png"
            alt="Transcript editing in Vivido — delete words, delete footage"
            className="w-full block object-cover"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2"
            style={{ background: 'linear-gradient(to top, rgba(14,20,14,0.80) 0%, transparent 100%)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="#85AB8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: '#85AB8B' }}>3 filler words removed · 00:04 saved</span>
          </div>
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
    visual: <RecordVisual />,
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
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid #D8D5CC' }}>
        <div className="relative">
          <img
            src="/onevideo_everywhere.png"
            alt="One video repurposed for YouTube, Shorts, and Instagram"
            className="w-full block object-contain"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2"
            style={{ background: 'linear-gradient(to top, rgba(14,20,14,0.75) 0%, transparent 100%)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="#85AB8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: '#85AB8B' }}>3 formats · 1 source edit</span>
          </div>
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
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid #D8D5CC' }}>
        {/* macOS title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3" style={{ backgroundColor: '#F0EEE8', borderBottom: '1px solid #D8D5CC' }}>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.65)' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234,179,8,0.65)' }} />
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.65)' }} />
          <span className="ml-2 text-xs font-mono" style={{ color: '#7a8a76' }}>publish.vivido</span>
        </div>
        {/* Screenshot + bottom stat overlay */}
        <div className="relative">
          <img
            src="/aigen_dashboard.png"
            alt="Vivido Smart Publish — AI title suggestions, CTR scores and tags"
            className="w-full block object-cover"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2"
            style={{ background: 'linear-gradient(to top, rgba(14,20,14,0.80) 0%, transparent 100%)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L5.5 10.5L12 3.5" stroke="#85AB8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-semibold" style={{ color: '#85AB8B' }}>AI title · 92 CTR score · auto-tagged</span>
          </div>
        </div>
      </div>
    ),
  },
]

function StyleModelSection() {
  return (
    <section id="style-model" className="relative py-56 overflow-hidden" style={{ backgroundColor: '#0e0c0a' }}>
      <BoomerangVideoBg src="/creator_video_intelligence.mp4" className="absolute inset-0 w-full h-full" />
      {/* Warm near-black tint — light enough to let video breathe */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(14,12,10,0.62) 0%, rgba(14,12,10,0.28) 50%, rgba(14,12,10,0.10) 100%)' }} />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase mb-6" style={{ color: 'rgba(250,248,244,0.75)', backgroundColor: 'rgba(250,248,244,0.10)', border: '1px solid rgba(250,248,244,0.18)' }}>
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
            <span style={{ color: 'rgba(250,248,244,0.60)' }}>Then helps you do it faster.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['Hook length', 'Cut rhythm', 'B-roll ratio', 'Drop-off point'].map((label) => (
              <span
                key={label}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(250,248,244,0.15)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(250,248,244,0.30)', color: 'rgba(250,248,244,0.92)' }}
              >
                {label}
              </span>
            ))}
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
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid #D8D5CC' }}>
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ backgroundColor: '#F0EEE8', borderBottom: '1px solid #D8D5CC' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.65)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(234,179,8,0.65)' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.65)' }} />
                <span className="ml-2 text-xs font-mono" style={{ color: '#7a8a76' }}>teams.vivido</span>
              </div>
              <div className="relative">
                <img
                  src="/teamview.png"
                  alt="Vivido team workspace — shared brand kit, style guide and projects"
                  className="w-full block object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2"
                  style={{ background: 'linear-gradient(to top, rgba(14,20,14,0.80) 0%, transparent 100%)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L5.5 10.5L12 3.5" stroke="#85AB8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs font-semibold" style={{ color: '#85AB8B' }}>Brand kit · shared library · team handoffs</span>
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
  const [styleCardVisible, setStyleCardVisible] = useState(true)

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />

        {/* Radial overlay — soft cream halo behind the text, transparent at edges */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 42%, rgba(250,248,244,0.72) 0%, rgba(250,248,244,0.38) 45%, transparent 75%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-8" style={{ backgroundColor: 'rgba(51,100,67,0.08)', border: '1px solid rgba(51,100,67,0.18)', color: '#336443' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
            The all-in-one studio for video creators
          </div>
          <h1
            className="font-normal leading-[0.95] text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl text-balance"
            style={{ fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", sans-serif', letterSpacing: '-0.035em', color: '#336443' }}
          >
            The studio that learns{' '}
            <span style={{ color: '#85AB8B' }}>how you create</span>
          </h1>
          {/* Line 1 — intelligence proof */}
          <p
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-md rounded-2xl px-5 py-3"
            style={{ color: 'rgba(31,42,29,0.80)', backgroundColor: 'rgba(255,255,255,0.60)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.50)' }}
          >
            Your hook length. Your cut rhythm. Your style.
          </p>

          {/* Line 2 — capability chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-sm">
            {['Record', 'AI Editing', 'YouTube', 'Reels', 'Shorts', 'Captions', 'Stream', 'Publish'].map((cap) => (
              <span
                key={cap}
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(51,100,67,0.18)', color: '#4b5b47' }}
              >
                {cap}
              </span>
            ))}
          </div>

          {/* CTA + platform chip */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <Link
              to="/early-access"
              className="text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors shadow-md"
              style={{ backgroundColor: '#336443' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a5238')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#336443')}
            >
              Get Early Access
            </Link>
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(51,100,67,0.30)', color: '#336443' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              macOS only
            </div>
          </div>
        </div>

        {/* Scroll hint — hidden on mobile where the Style Model card occupies the bottom */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1 opacity-60">
          <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: '#336443' }}>scroll</span>
          <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#336443" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Bottom-left CTA — frosted glass card, dismissible */}
        {styleCardVisible && (
          <div
            className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm rounded-2xl px-5 py-4"
            style={{ backgroundColor: 'rgba(250,250,248,0.72)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.60)' }}
          >
            {/* Header row with title + close button */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2" style={{ color: '#3d5638' }}>
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="text-sm font-semibold">Style Model<sup className="text-[10px]">™</sup></span>
              </div>
              <button
                onClick={() => setStyleCardVisible(false)}
                className="shrink-0 rounded-full p-1 transition-colors -mt-0.5 -mr-1"
                style={{ color: 'rgba(61,86,56,0.50)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#3d5638')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(61,86,56,0.50)')}
                aria-label="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
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
        )}
      </section>

      {/* Feature sections */}
      {features.map((feature) => (
        <section key={feature.id} id={feature.id} className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 gap-16 items-center ${feature.wide ? 'lg:grid-cols-[47fr_53fr]' : 'lg:grid-cols-2'}`}>
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
