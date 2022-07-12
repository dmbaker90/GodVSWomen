/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ping: {
          "75%, 100%": { transform: "scale(2)" },
          "100%": { opacity: 0 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1)",
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  plugins: [],
};
