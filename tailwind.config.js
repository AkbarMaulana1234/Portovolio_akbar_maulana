/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Menambahkan file index.html di root
    "./src/**/*.{html,js}", // Jika Anda memiliki file HTML atau JS di dalam folder src
  ],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors: {
        primary: "oklch(0.623 0.214 259.815)",
        secondary:"oklch(0.551 0.027 264.364)"
      },
      screens:{
        "2xl":"1320px"
      },
      
    },
  },
  plugins: [],
}