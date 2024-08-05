/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        script: ["Dancing Script", "cursive"],
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
