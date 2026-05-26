/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"DM Sans"',    'sans-serif'],
        mono:    ['"DM Mono"',    'monospace'],
        display: ['"Syne"',       'sans-serif'],
      },
      colors: {
        base:  '#080b10',
        card:  '#0d1117',
        card2: '#0a0e15',
        deep:  '#06080d',
        line:  '#1e2533',
        line2: '#2a3545',
        dim:   '#94a3b8',
        muted: '#64748b',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
