import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          primary: '#1B2347',
          accent: '#5EEAD4'
        }
      },
      boxShadow: {
        card: '0 20px 45px rgba(15,23,42,0.15)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
