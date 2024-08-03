import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        thai: ['var(--font-sans-thai)', 'sans-serif'],
        jp: ['var(--font-sans-jp)', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
