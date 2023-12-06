import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#161616',
        background: '#ffffff',
        accent: '#0A801D',
        'foreground-light': '#545454'
      }
    }
  },
  plugins: []
}
export default config
