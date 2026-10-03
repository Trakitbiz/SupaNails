/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF7F3",
        cream: "#F5EDE7",
        espresso: "#2B211D",
        cocoa: "#5A4A42",
        mauve: "#A8536B",
        "mauve-dark": "#8A4258",
        gold: "#C9A66B",
        hairline: "#E4D9D0",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      borderRadius: {
        arch: "999px 999px 0 0",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
}

