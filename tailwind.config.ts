import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {},
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: {
              50: '#f2f2f2',
              100: '#d9d9d9',
              200: '#bfbfbf',
              300: '#a6a6a6',
              400: '#8c8c8c',
              500: '#737373',
              600: '#595959',
              700: '#404040',
              800: '#262626',
              900: '#0d0d0d',
              DEFAULT: '#0d0d0d',
            },
            primary: {
              50: '#e1ffe7',
              100: '#b6fac1',
              200: '#89f69a',
              300: '#5bf273',
              400: '#31ee4d',
              500: '#1dd533',
              600: '#12a627',
              700: '#09761b',
              800: '#01470e',
              900: '#001900',
              DEFAULT: '#0A801D',
              foreground: '#FFFFFF',
            },
          },
        },
      },
    }),
  ],
};
export default config;
