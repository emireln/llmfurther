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
        neutral: {
          750: '#2a2d34',
          850: '#181a1f',
        },
        accent: {
          DEFAULT: '#ff3d5c',
          hover: '#e62e4c',
          light: 'rgba(255, 61, 92, 0.1)',
          border: 'rgba(255, 61, 92, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
