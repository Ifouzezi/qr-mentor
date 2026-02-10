module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        "qr-dark": "#1F314F",    // was slate-900
        "qr-gray": "#68778D",     // was slate-500
        "qr-light": "#D5E1EF",    // was slate-300
        white: "#FFFFFF"
      },
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui"]
      },
      fontSize: {
        preset1: ["22px", { lineHeight: "120%", letterSpacing: "0px", fontWeight: "700" }],
        preset2: ["15px", { lineHeight: "140%", letterSpacing: "0.2px", fontWeight: "400" }]
      },
      spacing: {
        200: "16px",
        300: "24px",
        400: "28px",
        500: "40px"
      }
    }
  },
  plugins: []
}