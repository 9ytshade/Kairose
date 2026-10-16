/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Krea & Morphic pure voids and dark stages
        obsidian: '#000000',
        midnight: '#07090e',
        console: {
          DEFAULT: '#0d0f12',
          surface: '#12151b',
          card: '#161922',
          lift: '#1f2430',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.16)',
        },
        // Morphic stepped surface stack
        surface: {
          0: '#000000',
          1: '#121418',
          2: '#1a1d24',
          3: '#242832',
        },
        // Langbase & Krea achromatic tones
        bone: '#fafafa',
        fog: '#a1a1aa',
        ash: '#71717a',
        wire: '#27272a',
        // Kinetic accents
        electric: {
          DEFAULT: '#0075ff',
          glow: 'rgba(0, 117, 255, 0.35)',
          hover: '#1a85ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-spectrum': 'linear-gradient(90deg, #f6d1ac 0%, #f3b5d2 25%, #c7b8f5 50%, #a7eadc 75%, #afcdf6 100%)',
        'aurora-glow': 'radial-gradient(ellipse at 50% -20%, rgba(199, 184, 245, 0.15), rgba(0, 0, 0, 0) 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '32px 32px',
        'grid-lg': '64px 64px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2)',
        'cinema': '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 40px -15px rgba(0, 117, 255, 0.2)',
        'aurora-glow': '0 0 35px -5px rgba(199, 184, 245, 0.25)',
      },
      letterSpacing: {
        'tighter-cinema': '-0.035em',
        'tight-cinema': '-0.025em',
        'mono-compressed': '-0.05em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora-shift': 'aurora 8s ease infinite alternate',
      },
      keyframes: {
        aurora: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(30deg)' },
        }
      }
    },
  },
  plugins: [],
}
