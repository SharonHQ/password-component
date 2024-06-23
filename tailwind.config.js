/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    colors: {
      'purple': '#C701EB',
      'gray': '#abb8c3',
      'dark-purple': '#432061',
      'white': '#ffffff',
      'light-purple': '#43206142',
      'dark-gray': '#444444',
      'light-gray': '#999999',
      'green': '#a7c957',
      'red': '#bc4749'
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}

