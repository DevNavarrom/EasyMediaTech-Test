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
      'purple-1000': '#9B8ADB',
      'white': '#FFFFFF',
      'blue-sky': '#58BCDB',
      'blue-sky-400': '#59bcdb',
      'blue-dark': '#0E2248',
      'gray-1000': '#666666',
      'fucsia': '#C646AA'
    },
    borderColor: {
      'white-50': '#EAEAEA'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

