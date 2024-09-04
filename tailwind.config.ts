import type { Config } from 'tailwindcss';
const flowbite = require('flowbite-react/tailwind');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E33532', // Màu đỏ
        'secondary': '#F9C32D', // Màu vàng
      }
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
