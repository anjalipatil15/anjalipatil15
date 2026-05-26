/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Inter',    'sans-serif'],
        mono:  ['"DM Mono"','monospace'],
      },
      colors: {
        navy:        '#0f172a',
        'navy-l':    '#112240',
        'navy-card': '#1e293b',
        slate:       '#8892b0',
        'slate-l':   '#a8b2d8',
        'slate-w':   '#ccd6f6',
        teal:        '#64ffda',
      },
    },
  },
  plugins: [],
}
