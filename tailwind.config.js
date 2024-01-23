/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#e6f6f7',
          100: '#ccecee',
          200: '#99d9dd',
          300: '#66c6cc',
          400: '#33b3bb',
          500: '#00a0aa',
          600: '#008088',
          700: '#006066',
          800: '#004044',
          900: '#002022',
        },
        secondary: '#FFC567',
        background: '#F8F9FE',
        'c-gray': {
          100: '#D9D9D9',
          200: '#979797',
        },
      },
      maxWidth: {
        container: '1120px',
        45: '180px',
      },
      width: {
        15: '60px',
      },
      borderRadius: {
        'lg-5': '10px',
        '2.5xl': '20px',
      },
      height: {
        0.5: '2px',
        0.75: '3px',
        15: '60px',
      },
      gap: {
        12.5: '50px',
        17: '70px',
        23: '90px',
      },
      fontSize: {
        '7xl': '70px',
      },
    },
  },
  plugins: [],
};
