const config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        card: "var(--card-border)",
        content: "var(--content-border)",
      },
      colors: {
        primary: "#2563EB",
        secondary: "#64748B",
        accent: "#FACC15",
        menu: "var(--menu-color)",
      },
      backgroundColor: {
        menu: "var(--menu-background)",
        "menu-hover": "var(--menu-hover-background)",
        content: "var(--content-background)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};

module.exports = config;
