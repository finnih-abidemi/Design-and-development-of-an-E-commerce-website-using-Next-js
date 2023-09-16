/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem', 
          xl: '3rem',
        },
        screens: {
          sm: '100%',
          lg: '1120px', // On large screens, the container has a max-width of 1120px
          xl: '1280px', // On extra-large screens, the container has a max-width of 1280px
        },
      },
    },
  },
  plugins: [],
};
