/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#257bc4",
        grass: "#9BCC50",
        poison: "#B97FC9",
        fire: "#FC7C23",
        psychic: "#F366B9",
        ice: "#3DC7EF",
        flying: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
