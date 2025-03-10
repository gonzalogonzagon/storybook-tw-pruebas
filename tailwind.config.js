/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
      "./.storybook/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.stories.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }