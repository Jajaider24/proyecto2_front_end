/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos fuente
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // azul personalizado opcional
        secondary: "#FBBF24", // amarillo personalizado opcional
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Mejora los formularios
  ],
};
