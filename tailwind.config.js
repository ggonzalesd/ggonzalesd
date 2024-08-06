/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appmain: '#C73659',
        appaccent: '#A91D3A',
        appsecodary: '#5936C7',
        appbackground: '#990D2A',
        appdark: '#151515',
        applight: '#EEEEEE',
      },
      textColor: {
        applight: '#EEEEEE',
      },
    },
  },
  plugins: [],
};
