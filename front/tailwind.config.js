/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      flex: {
        wrap: {
          justifyContent: "space-between",
        },
      },
    },
    colors: {
      'purple-1000': '#8973D8',
      'white': '#FFFFFF',
      'blue-sky': '#48E3BE',
      'blue-sky-400': '#59bcdb',
      'blue-dark': '#0E2248',
      'gray-1000': '#666666'
    },
    borderColor: {
      'white-50': '#EAEAEA'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

