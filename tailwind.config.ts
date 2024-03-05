import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ash-100': '#f5f5f5',
        'ash-200': '#d1d1d1',
        'ash-300': '#6e6e6c',
        'ash-400': '#161616',

        'orange-100': '#fa8d5f',
        'orange-300': '#fc4c02',
        'orange-200': '#fb6121',
        'orange-400': '#ac3402',
      },
    },
  },
  plugins: [],
};
export default config;
