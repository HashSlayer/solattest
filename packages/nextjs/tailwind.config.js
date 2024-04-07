/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#000000",
          "primary-content": "#06fc99",
          secondary: "#06fc99",
          "secondary-content": "#000000",
          accent: "#000000",
          "accent-content": "#06fc99",
          neutral: "#000000",
          "neutral-content": "#000000",
          "base-100": "#06fc99",
          "base-200": "#F9FBFF",
          "base-300": "#4E3C5C",
          "base-content": "#000000",
          "window-bg": "#000000",
          "window-text": "#000000",
          info: "#06fc99",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#00D680",
          "primary-content": "#000000",
          secondary: "#000000",
          "secondary-content": "#00D680",
          accent: "#00D680",
          "accent-content": "#00D680",
          neutral: "#00D680",
          "neutral-content": "#ffffff",
          "base-100": "#000000",
          "base-200": "#352443",
          "base-300": "#000000",
          "base-content": "#00D680",
          info: "#00D680",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
