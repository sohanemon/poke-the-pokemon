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
        fire: "#FC7C23",
        primary: "#257bc4",
        grass: "#9BCC50",
        poison: "#B97FC9",
        shadow: "#B97FC9",
        psychic: "#F366B9",
        ice: "#3DC7EF",
        bug: "#53a253",
        flying: "#BDBDBD",
        ghost: "#786752",
        fighting: "#92372e",
        dark: "#47382d",
        fairy: "#36B0DB",
        electric: "#FFC926",
        water: "#6BCFEB",
        rock: "#11436C",
        ground: "#744E33",
        dragon: "#DAF16F",
        steel: "#11436C",
        normal: "#B56B3A",
        unknown: "#B56B3A",
      },
    },
  },
  plugins: [],
};
