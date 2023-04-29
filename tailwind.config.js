module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "coffee": {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        },
      },
      keyframes: {
        slidedown: {"0%": { transform: "translateY(-100%)" },"100%": { transform: "translateY(0%)" }, },
        faceIn: { from: { opacity: 0 }, to: { opacity: 1 } }
      },
      animation: {
        slidedown: "slidedown .5s ease-in-out",
        faceIn: "faceIn .5s ease-in-out",
      },
    },
  },
  plugins: [],
}
