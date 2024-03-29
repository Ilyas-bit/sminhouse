/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        1368: "1368px",
        1280: "1280px",
      },
      colors: {
        button_hover: "#00A3C4",
        button_modules_info_hover: "#D4DEE9",
        button_click: "#086F83",
        dark_font: "#2D3748",
        light_dark_font: "#42526B",
        gray_font: "#A0A8B5",
        accent_font: "#00A3C4",
        light_accent_font: "#0BC5EA",
        accent_border: "#0BC5EA",
        gray_border: "RGBA(19, 103, 150, 0.4)",
        dark_gradient_from: "#39475C",
        dark_gradient_to: "#576E90",
        dark_background: "#42526B",
        gray_background: "#EDF2F7",
        main_background: "#F9FBFC",
        accent_background: "#0BC5EA",
        hover_form: "#F7FAFC",
        privacy_policy: "#A0AEC0",
      },
      fontFamily: {
        sans: ["PT Root UI", "sans"],
      },
      fontSize: {
        "6xl": [
          "64px",
          {
            lineHeight: "67px",
          },
        ],
        // Or with a default line-height as well
        "4xl": [
          "39px",
          {
            lineHeight: "41px",
          },
        ],
        "32px": [
          "32px",
          {
            lineHeight: "32px",
          },
        ],
        "28px": [
          "28px",
          {
            lineHeight: "28px",
          },
        ],
        "22px": [
          "22px",
          {
            lineHeight: "26px",
          },
        ],
      },
    },
  },
  plugins: [],
};
