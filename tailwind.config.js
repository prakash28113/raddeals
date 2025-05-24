/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e5ffb2',
          DEFAULT: '#d8ff85',
          dark: '#c2e65c'
        },
        secondary: {
          light: '#2d364d',
          DEFAULT: '#1a1f2d',
          dark: '#0f121a'
        },
        accent: {
          light: '#f7f8fa',
          DEFAULT: '#e8eaf0',
          dark: '#d1d5e0'
        },
        'custom-green': '#537D5D',
        'hero-background': '#0a211f',
        'contact-background': '#2b4f46',
        'footer-text': '#192e2d'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};