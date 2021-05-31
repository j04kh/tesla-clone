module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'ModelS': "url('./assets/Desktop-ModelS.jpeg')",
        'Model3': "url('./assets/Desktop-Model3.jpeg')",
        'ModelX': "url('./assets/Desktop-ModelX.jpeg')",
        'ModelY': "url('./assets/Desktop-ModelY.jpeg')",
        'SolarPanels': "url('./assets/Desktop-SolarPanels.jpeg')",
        'SolarRoof': "url('./assets/Desktop-SolarRoof.jpeg')",
        'Accesories': "url('./assets/Desktop-Accessories.jpg')",
      }),
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
