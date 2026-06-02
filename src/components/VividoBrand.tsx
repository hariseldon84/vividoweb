import { VividoMark } from './VividoMark'

interface VividoBrandProps {
  markSize?: number
  color?: string
  className?: string
}

// The mark's bold V is the "v" — "ivido" follows to complete "vivido"
export function VividoBrand({ markSize = 40, color = '#123C2A', className }: VividoBrandProps) {
  // Font size scaled so the lowercase x-height visually matches the V stroke height in the mark
  const fontSize = markSize * 0.68

  return (
    <div className={`flex items-center ${className ?? ''}`} style={{ gap: `${markSize * 0.04}px` }}>
      <VividoMark size={markSize} color={color} />
      <span
        style={{
          fontFamily: '"JA JayaGiri Sans", "Neue Haas Grotesk Display Pro 55 Roman", sans-serif',
          fontWeight: 700,
          fontSize: `${fontSize}px`,
          letterSpacing: '-0.04em',
          color,
          lineHeight: 1,
          // Nudge text down slightly so its visual center aligns with the V body (not the dot)
          marginTop: `${markSize * 0.12}px`,
        }}
      >
        ivido
      </span>
    </div>
  )
}
