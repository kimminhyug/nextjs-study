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
      },
      colors: {
        primary: "#2563EB",
        secondary: "#64748B",
        accent: "#FACC15",
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

export default config;
