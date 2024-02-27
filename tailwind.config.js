/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e1e4e6",
          "200": "rgba(225, 228, 230, 0)",
        },
        slategray: {
          "100": "#727d87",
          "200": "#626e79",
        },
        darkorange: "#ff7724",
        gray: {
          "100": "#fbfcfd",
          "200": "#212731",
          "300": "rgba(0, 0, 0, 0)",
        },
        dodgerblue: "#1b88f4",
        aliceblue: "#f3f9ff",
        darkslateblue: "#074786",
        dimgray: {
          "100": "#5c6874",
          "200": "#4b5665",
        },
        darkslategray: "#2c384a",
        crimson: "#ef4c5d",
        darkgray: "#9fa9b3",
        whitesmoke: "#f2f4f7",
        seashell: "#fff4ed",
        silver: "#b6bdc4",
        lightgray: "#d1d6da",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      smi: "13px",
      mini: "15px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
