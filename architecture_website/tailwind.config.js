module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)', // slate-800
          light: 'var(--color-primary-light)', // slate-700
          dark: 'var(--color-primary-dark)', // slate-900
        },
        accent: 'var(--color-accent)', // amber-500
        white: 'var(--color-white)', // white
        light: 'var(--color-light)', // gray-50
        'light-gray': 'var(--color-light-gray)', // gray-100
        'medium-gray': 'var(--color-medium-gray)', // gray-300
        'dark-gray': 'var(--color-dark-gray)', // gray-600
        black: 'var(--color-black)', // gray-900
        success: 'var(--color-success)', // green-600
        warning: 'var(--color-warning)', // amber-500
        error: 'var(--color-error)', // red-600
        info: 'var(--color-info)', // blue-600
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        DEFAULT: 'var(--border-radius)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'xl': 'var(--border-radius-xl)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};