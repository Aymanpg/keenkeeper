/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: '#244d3f',
        accent: '#1a8862',
        'text-dark': '#1f2937',
        'text-body': '#64748b',
        overdue: '#ef4444',
        'almost-due': '#efad44',
        'on-track': '#1a8862',
        background: '#fafafa',
      }
    }
  }
}