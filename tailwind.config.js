// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./**/*.html"],
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
          DEFAULT: '#0061ff',
          light: '#e7f0fd',
          dark: '#004ecc',
        },
        subtle: colors.gray[600], // Light mode muted
        muted: colors.gray[500],  // Darker by default for better contrast in dark mode
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
