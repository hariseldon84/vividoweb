import { Reveal } from '../components/Reveal'

interface RoadmapItem {
  title: string
  description: string
  tag: string
  ai?: boolean
}

const shipped: RoadmapItem[] = [
  {
    title: 'Foundation Shell',
    description: 'Project create, open, save. Autosave every 30 seconds. Version history with 30-day retention. Crash recovery.',
    tag: 'E1',
  },
  {
    title: 'Media Import & Library',
    description: 'File picker and drag-and-drop import. FFprobe metadata extraction. Thumbnail generation. Asset library with search.',
    tag: 'E2',
  },
  {
    title: 'Preview Monitor',
    description: 'Video, audio, and image playback. Scrubbing, fit/100% zoom, frame-accurate seeking. Blob URL lifecycle management.',
    tag: 'E2',
  },
  {
    title: 'Timeline Editor — Foundation',
    description: '5-track scaffold (2 video, 2 audio, 1 caption). Clip drag-and-drop with snapping. Dynamic ruler and playhead.',
    tag: 'E3',
  },
  {
    title: 'Timeline Trim Handles',
    description: 'Non-destructive source trim on selected clips. Playback respects trim out-point. Sequence advances between clips.',
    tag: 'E3',
  },
  {
    title: 'Timeline Clip Delete',
    description: 'Delete key removes clip from timeline. Library asset stays intact. Keyboard shortcut with input field guard.',
    tag: 'E3',
  },
  {
    title: 'Timeline Zoom',
    description: 'Zoom in/out via buttons, Cmd+=, Cmd+−, and trackpad pinch. Collision-aware ruler label placement.',
    tag: 'E3',
  },
]

const building: RoadmapItem[] = [
  {
    title: 'Timeline — Advanced Editing',
    description: 'Ripple trim, blade/split tool, multi-clip selection, keyboard navigation (arrow keys, Home/End).',
    tag: 'E3',
  },
  {
    title: 'Waveform Visualization',
    description: 'Audio waveform rendering for clips on audio tracks. Visual feedback for Sentinel Audio processing.',
    tag: 'E3',
  },
  {
    title: 'Transcript & Captions',
    description: 'Whisper-powered background transcription. Word-level timestamps. Filler word detection and removal. Multi-language support.',
    tag: 'E4',
  },
  {
    title: 'Transcript-First Editing',
    description: 'Delete words in the transcript surface to remove corresponding timeline footage. The core edit flow.',
    tag: 'E4',
  },
]

const coming: RoadmapItem[] = [
  {
    title: 'Sentinel Audio™',
    description: 'AI noise removal with A/B preview. Platform-specific loudness normalization. Automatic voice-over music ducking. EQ presets.',
    tag: 'E5',
    ai: true,
  },
  {
    title: 'One-Click Repurpose',
    description: 'Shorts and Reels markers in timeline. Auto-reframe for vertical formats. Platform-specific metadata per clip.',
    tag: 'E6',
  },
  {
    title: 'Smart Publish Package',
    description: 'AI title suggestions with CTR scores. Auto-written descriptions. Tag recommendations from transcript. Chapter markers.',
    tag: 'E6',
    ai: true,
  },
  {
    title: 'Style Model',
    description: 'Per-creator compounding editorial AI. Passive behavior observation. Style insights after project 5. AI rough cuts.',
    tag: 'E7',
    ai: true,
  },
  {
    title: 'Auth & Cloud Sync',
    description: 'Supabase Auth. Cloud project backup. Version history sync. Team workspaces.',
    tag: 'E8',
  },
  {
    title: 'Brand Kit & For Teams',
    description: 'Fonts, colors, logos per workspace. Shared asset library. Team handoffs. Multi-workspace support.',
    tag: 'E7',
  },
  {
    title: 'Windows Support',
    description: 'Native Windows desktop app. Full feature parity with macOS release.',
    tag: 'Future',
  },
]

function Column({
  title,
  items,
  color,
  dot,
}: {
  title: string
  items: RoadmapItem[]
  color: string
  dot: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`w-2 h-2 rounded-full ${dot}`} />
        <h2 className={`text-sm font-semibold uppercase tracking-wider ${color}`}>{title}</h2>
        <span className="text-xs text-text-subtle bg-surface border border-border rounded-full px-2 py-0.5">
          {items.length}
        </span>
      </div>
      {items.map((item) => (
        <div key={item.title} className="roadmap-card">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-sm font-semibold text-text">{item.title}</p>
            <div className="flex items-center gap-1.5 shrink-0">
              {'ai' in item && item.ai && (
                <span className="text-[10px] font-semibold text-violet bg-moss/10 border border-moss/20 px-1.5 py-0.5 rounded-full">
                  AI
                </span>
              )}
              <span className="text-[10px] font-semibold text-text-subtle bg-surface-elevated border border-border px-1.5 py-0.5 rounded-full">
                {item.tag}
              </span>
            </div>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export function Roadmap() {
  return (
    <main className="pt-24 lg:pt-28">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-4">
              <span className="section-badge">Roadmap</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-center text-text mt-6 leading-tight">
              Built in public.<br />
              <span className="gradient-text">Nothing hidden.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-center text-text-muted mt-6 text-lg max-w-2xl mx-auto">
              Every feature, every sprint, every decision — visible here. This is exactly where Vivido is, right now.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Column
                title="Shipped"
                items={shipped}
                color="text-green-400"
                dot="bg-green-400"
              />
              <Column
                title="Building Now"
                items={building}
                color="text-violet"
                dot="bg-violet animate-pulse"
              />
              <Column
                title="Coming Next"
                items={coming}
                color="text-text-muted"
                dot="bg-text-subtle"
              />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-16 p-6 bg-surface border border-border rounded-2xl max-w-2xl mx-auto text-center">
              <p className="text-sm text-text-muted">
                Want to influence what gets built next?{' '}
                <a href="/early-access" className="text-violet hover:text-fern transition-colors font-medium">
                  Join the waitlist →
                </a>{' '}
                Early access members get a vote in the priority queue.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
