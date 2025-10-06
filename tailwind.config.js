/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'parisienne': ['Parisienne', 'cursive'],
        'prime-script': ['Prime Script', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'allura': ['Allura', 'cursive'],
      },
    },
  },
  plugins: [],
}