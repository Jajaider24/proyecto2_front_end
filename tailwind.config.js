// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Móviles
        'md': '768px',   // Tablets
        'lg': '1024px',  // Escritorio
        'xl': '1280px',  // Pantallas grandes
        '2xl': '1536px', // Pantallas muy grandes
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Si tienes formularios
  ],
};


