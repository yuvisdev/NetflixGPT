/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#E50815",
        overlay: "#121212",
        bgForm: "rgba(0,0,0,0.7)", // Ensure the hex color code is correct
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontSize: {
        chota: "6px",
      },
    },
  },
  plugins: [],
};
