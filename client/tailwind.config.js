/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "2000px",
      },
      colors: {
        primary: '#527AF6',
        secondary: '#111827',
        black: "#000000",
        white: "#ffffff",
        gray: "#E5E7EB",
        lightYellow: "#FEF08A",
        sky: "#87CEEB",
        danger: "#DC2626",
      },
      borderRadius: {
        circle: "50%"
      },
      boxShadow: {
        "input-focus": "0px 0px 5px 1px #8C7C7B",
      },
    },
  },
  plugins: [],
}

