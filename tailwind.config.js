module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#71bb02', // Custom name for your color
        'custom-yello': '#f1e6c3',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
