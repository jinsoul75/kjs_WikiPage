import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,json}', './src/app/**/*.{js,ts,jsx,tsx,json}'],
  theme: {
    colors: {
      white: '#fff',
      ivory: '#f2f2f2',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#008275',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#ccc',
      link:'#0275d8',
      'btn-hover-gray':'#ebebeb'
    },
    fontSize: {
      xs: '12px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '36px',
    },
  },
  plugins: [],
};
export default config;
