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
      'blue-dark': '#0E2248'
    },
    borderColor: {
      'white-50': '#EAEAEA'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

