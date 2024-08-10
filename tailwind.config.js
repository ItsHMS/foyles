/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sisal-70': 'var(--www-foyles-co-uk-sisal-70)',
        'mine-shaft': 'var(--www-foyles-co-uk-mine-shaft)'
      },
      boxShadow: {
        'custom-1': 'var(--box-shadow-1)',
        'custom-2': 'var(--box-shadow-2)',
        'custom-drop': 'var(--drop-shadow)',
      },
    },
  },
  plugins: [],
}