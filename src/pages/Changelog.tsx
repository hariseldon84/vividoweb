import { Reveal } from '../components/Reveal'

const entries = [
  {
    version: 'v0.3.2',
    date: 'June 1, 2026',
    title: 'Timeline zoom, ruler ticks, and playhead sync',
    items: [
      'Added zoom in/out via buttons, Cmd+=, Cmd+−, and trackpad pinch gesture',
      'Dynamic ruler ticks with collision-aware label placement at all zoom levels',
      'Playhead now syncs with scroll position as playback advances',
      'Clip inspector shows lane, timing, and source offset in the right panel',
    ],
    tag: 'E3 — Timeline',
  },
  {
    version: 'v0.3.1',
    date: 'May 10, 2026',
    title: 'Delete clips from timeline (library stays intact)',
    items: [
      'Press Delete or Backspace to remove selected clip from timeline',
      'Media asset remains in library — only the timeline placement is removed',
      'Asset usage status downgrades to "unused" when no remaining clips reference it',
      'Input field guard prevents Delete from firing while typing project names',
    ],
    tag: 'E3 — Timeline',
  },
  {
    version: 'v0.3.0',
    date: 'May 5, 2026',
    title: 'Trim handles and playback boundary enforcement',
    items: [
      'Left and right trim handles on selected timeline clips',
      'Non-destructive source trim — original media is never modified',
      'Playback pauses and clamps at trim out-point automatically',
      'Sequence playback advances to next clip on the same lane after trim out-point',
    ],
    tag: 'E3 — Timeline',
  },
  {
    version: 'v0.2.3',
    date: 'May 2, 2026',
    title: 'Playback regression fix — all resolutions stable',
    items: [
      'Fixed blob URL revocation destroying active preview sources on multi-batch import',
      'Image monitor now falls back to thumbnail on load error',
      'React ref callback stability fix resolves black screen on high-res video (3840×2160)',
      'Standard, high, and non-standard aspect ratio media all play correctly',
    ],
    tag: 'E2 — Media',
  },
  {
    version: 'v0.2.0',
    date: 'April 30, 2026',
    title: 'Timeline editor foundation — drag, drop, snap',
    items: [
      '5-track scaffold: 2 video tracks, 2 audio tracks, 1 caption track',
      'Drag assets from library to timeline with snapping and collision avoidance',
      'Compatible lane enforcement (video clips to video tracks, audio to audio)',
      'Clip delete removes from timeline but not from media library',
    ],
    tag: 'E3 — Timeline',
  },
  {
    version: 'v0.1.0',
    date: 'April 29, 2026',
    title: 'Media import, playback, and FFprobe metadata',
    items: [
      'File picker and drag-and-drop media import',
      'FFprobe metadata extraction: resolution, frame rate, codec, color space, sample rate',
      'FFmpeg thumbnail generation at 320×180 JPEG for video assets',
      'Preview monitor with video, audio, and image playback',
      'Frame-accurate scrubbing and fit/100% zoom modes',
    ],
    tag: 'E2 — Media',
  },
  {
    version: 'v0.0.1',
    date: 'April 28, 2026',
    title: 'Foundation shell — the beginning',
    items: [
      'Project create, open, save, and close with native file dialogs',
      'Atomic file writes with temp-file-then-rename pattern for crash safety',
      'Autosave every 30 seconds with visual indicator',
      'Version history UI — 30-day retention, visible and accessible',
      'Recovery state detection on launch — restore unsaved work after crash',
      'Shell UI: left asset library, center monitor, right inspector, bottom timeline',
      'IPC contracts with Zod schema validation between renderer and main process',
    ],
    tag: 'E1 — Foundation',
  },
]

export function Changelog() {
  return (
    <main className="pt-40">
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-4">
              <span className="section-badge">Changelog</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-center text-text mt-6 leading-tight">
              Every ship,<br />
              <span className="gradient-text">documented.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-center text-text-muted mt-6 text-lg max-w-xl mx-auto">
              Vivido is being built in public. Every version, every change — logged here before we launch.
            </p>
          </Reveal>

          <div className="mt-16 space-y-0">
            {entries.map((entry, i) => (
              <Reveal key={entry.version} delay={i * 50}>
                <div className="relative pl-8 pb-12">
                  {/* Timeline line */}
                  {i < entries.length - 1 && (
                    <div className="absolute left-3 top-5 bottom-0 w-px bg-border" />
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface border-2 border-moss flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-violet" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-semibold text-violet bg-moss/10 border border-moss/20 px-2.5 py-1 rounded-lg">
                      {entry.version}
                    </span>
                    <span className="text-xs text-text-subtle">{entry.date}</span>
                    <span className="text-xs text-text-subtle bg-surface border border-border px-2 py-0.5 rounded-full">
                      {entry.tag}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-text mb-4">
                    {entry.title}
                  </h2>

                  <ul className="space-y-2">
                    {entry.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                          <path d="M3 8L6.5 11.5L13 5" stroke="#336443" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-4 p-6 bg-surface border border-border rounded-2xl text-center">
              <p className="text-sm text-text-muted">
                New entries ship with every build.{' '}
                <a href="/early-access" className="text-violet hover:text-fern transition-colors font-medium">
                  Join the waitlist
                </a>{' '}
                to get notified.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
