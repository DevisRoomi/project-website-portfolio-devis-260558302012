import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'canvas-bg': '#121316',
        surface: '#1a1b20',
        elevated: '#22242b',
        'border-subtle': '#2b2d36',
        'border-strong': '#3f424e',
        'text-primary': '#f1f1f4',
        'text-secondary': '#9da1b0',
        'text-muted': '#636778',
        crimson: '#e63946',
        'crimson-hover': '#ff4d5a',
        'crimson-subtle': 'rgba(230, 57, 70, 0.12)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(0, 0, 0, 0.45)',
        glow: '0 0 20px rgba(230, 57, 70, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
