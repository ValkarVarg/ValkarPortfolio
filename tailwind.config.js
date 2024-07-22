/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'Arial', 'sans-serif'],
      },
      colors: {
        licorice: '#1E000E',
        airblue: '#7C9EB2',
        cream: '#EDEEC0',
        officegreen: '#3f7d20',
        magentahaze: '#9E4770',
        paynegrey: '#446274',
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
  },
  plugins: [],
}};

export default config;
