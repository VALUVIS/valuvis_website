import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        '15': '3.75rem',
        '16': '4rem',      
        '17': '4.5rem',
        '18': '5rem',
        '19': '5.5rem',
        '20': '6rem',
        '21': '6.5rem',
        '22': '7rem',
      },
      fontSize: {
        'xxs': '.625rem',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
}
export default config
