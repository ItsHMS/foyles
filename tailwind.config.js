/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sisal-70': 'var(--www-foyles-co-uk-sisal-70)',
        'mine-shaft': 'var(--www-foyles-co-uk-mine-shaft)',
        'cod-gray': 'var(--www-foyles-co-uk-cod-gray)',
        'wild-sand': 'var(--www-foyles-co-uk-wild-sand)',
        'ecru-white': 'var(--www-foyles-co-uk-ecru-white)',
        'black': 'var(--www-foyles-co-uk-black)',
        'shark-75': 'var(--www-foyles-co-uk-shark-75)',
        'white': 'var(--www-foyles-co-uk-white)',
        'cosmos': 'var(--www-foyles-co-uk-cosmos)',
        'iceberg': 'var(--www-foyles-co-uk-iceberg)',
        'moon-mist': 'var(--www-foyles-co-uk-moon-mist)',
        'shadow': 'var(--www-foyles-co-uk-shadow)',
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