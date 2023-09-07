/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      flex: {
        wrap: {
          justifyContent: "space-between",
        },
      },
    },
    colors: {
      'purple': '#8973D8',
      'white': '#FFFFFF',
      'blue-sky': '#48E3BE',
      'blue-dark': '#0E2248'
    },
    borderColor: {
      'white-50': '#EAEAEA'
    }
  },
  plugins: [],
}

