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
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
