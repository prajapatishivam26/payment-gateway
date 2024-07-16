/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Example color
        'primary-foreground': '#ffffff',
        muted: '#f1f5f9',
        'muted-foreground': '#64748b',
        background: '#ffffff',
        'background-foreground': '#000000',
      },
    },
  },

  plugins: [],
}