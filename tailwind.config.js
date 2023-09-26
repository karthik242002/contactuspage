/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sunshade-50": "#fef6ec",
        black: "#000",
        "sunshade-300": "#f3a042",
        white: "#fff",
        "sunshade-200": "#f8ca8f",
        dimgray: "#555",
        "neutral-dark-gray": "#505050",
      },
      spacing: {},
      fontFamily: {
        "text-medium-normal": "Roboto",
        "para-2": "Inter",
      },
      borderRadius: {
        "4xs": "9px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      xs: "12px",
      "12xl": "31px",
      "13xl": "32px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
