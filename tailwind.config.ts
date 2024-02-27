import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '6rem',
        '2xl': '10rem',
      },
    },
    extend: {
      backgroundPosition: {
        '60': '60%',
        half: '50%',
      },
      gridTemplateRows: {
        '48': 'auto 480px',
        'r-48': '480px auto',
      },
      gridTemplateColumns: {
        about: '400px 1fr',
        mobile: '300px',
      },
      objectPosition: {
        'center-top': '0 25%',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
