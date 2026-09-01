import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f0ff',
          purple: '#b026ff',
          blue: '#0080ff',
          pink: '#ff006e',
          green: '#00ff88',
        },
        cyber: {
          950: '#0a0e27',
          900: '#0f1535',
          800: '#1a1f4d',
          700: '#252d66',
        },
        slate: {
          950: '#0a0a0a',
          900: '#0f0f0f',
        },
      },
      backgroundColor: {
        'base': '#0a0e27',
        'surface': '#1a1f4d',
        'surface-light': '#252d66',
        'surface-dark': '#0f1535',
      },
      textColor: {
        'cream': '#f0f4ff',
        'dim': '#8892b0',
        'neon-cyan': '#00f0ff',
        'neon-purple': '#b026ff',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(176, 38, 255, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 128, 255, 0.3)',
        'glow-intense-cyan': '0 0 40px rgba(0, 240, 255, 0.5)',
      },
      borderColor: {
        'neon-cyan': '#00f0ff',
        'neon-purple': '#b026ff',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
export default config
