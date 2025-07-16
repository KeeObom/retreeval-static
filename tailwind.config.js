/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Sharp Grotesk"', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        surface: '#f7f9fb',
        primary: {
          DEFAULT: '#0061ff', // Dropbox Blue
          light: '#e7f0fd',
          dark: '#004ecc',
        },
        subtle: '#6b7280', // muted text
        muted: '#374151',
        border: '#e5e7eb',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
        medium: '0 6px 20px rgba(0, 0, 0, 0.08)',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
