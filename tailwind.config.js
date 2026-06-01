/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Page backgrounds
        bg:               '#FAFAF8',
        surface:          '#F0EEE8',
        'surface-dark':   '#1f2a1d',
        'surface-elevated': '#E6E3D8',
        border:           '#D8D5CC',
        'border-dark':    '#2d3a2a',
        // Text
        text: {
          DEFAULT: '#1f2a1d',
          muted:   '#4b5b47',
          subtle:  '#7a8a76',
        },
        // Brand greens
        forest:  '#1f2a1d',
        'forest-mid': '#2d3a2a',
        'forest-hover': '#2a3827',
        moss:    '#336443',
        fern:    '#85AB8B',
        grove:   '#3d5638',
        'grove-hover': '#2d4228',
        sage:    '#4b5b47',
      },
      fontFamily: {
        display: ['"JA JayaGiri Sans"', '"Neue Haas Grotesk Display Pro 55 Roman"', '"Neue Haas Grotesk Text Pro"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        sans:    ['"Neue Haas Grotesk Text Pro"', '"Helvetica Neue"', 'Helvetica', 'Inter', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.035em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
