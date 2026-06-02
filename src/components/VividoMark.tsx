interface VividoMarkProps {
  size?: number
  color?: string
  className?: string
}

// Glyph mark: bold V letterform + centered dot above — 52×72 viewport
export function VividoMark({ size = 48, color = 'currentColor', className }: VividoMarkProps) {
  const width = (52 / 72) * size

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 52 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vivido"
      role="img"
    >
      {/* Dot */}
      <circle cx="26" cy="7" r="6.5" fill={color} />
      {/* V — thick stroke with rounded caps so it reads as a letterform */}
      <path
        d="M4 21L26 63L48 21"
        stroke={color}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
