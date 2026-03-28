/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Hacker theme aliases
        cyan: colors.green,
        fuchsia: colors.emerald,
        purple: colors.lime,
        blue: colors.teal,
      },
      fontFamily: {
        sans: ['"Courier New"', 'Courier', 'monospace'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      }
    },
  },
  plugins: [],
};
