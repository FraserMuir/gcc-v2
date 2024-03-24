import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        serif: ['var(--font-libre-baskerville)'],
      },
      colors: {
        accent: '#012646',
        secondary: '#6e6d6d',
        primary: 'rgba(0, 0, 0, 0.8)',
        'inverse-primary': 'rgba(255, 255, 255, 0.8)',
        background: '#e2e1e0',
      },
      fontSize: {
        '2xs': '0.65rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
