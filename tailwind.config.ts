import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefbf3',
          100: '#fdf7e6',
          200: '#faecc3',
          300: '#f7dfa0',
          400: '#f1c85a',
          500: '#e8b514',
          600: '#d4a00f',
          700: '#b0800c',
          800: '#8d660a',
          900: '#735408',
          950: '#3f2d04',
        },
        slate: {
          950: '#0a0a0a',
          900: '#0f0f0f',
        },
      },
      backgroundColor: {
        'base': '#0a0a0a',
        'surface': '#1a1a1a',
        'surface-light': '#262626',
      },
      textColor: {
        'cream': '#f5f1e8',
        'dim': '#a8a8a8',
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
