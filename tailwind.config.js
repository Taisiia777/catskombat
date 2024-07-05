module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: { sm: { max: "550px" } },
      extend: {
        colors: {
          amber: {
            100: "#fef08a",
            300: "#ffd84f",
            400: "#ffc727",
            a100: "#ffea7c",
            a700: "#f7a600",
          },
          black: {
            900: "#0d0d0d",
            900_00: "#0d0d0d00",
            900_01: "#0c0c0c",
            900_02: "#000000",
          },
          blue: {
            500: "#329efd",
            a200: "#3c87f9",
          },
          blue_gray: {
            100: "#c3daea",
            200: "#a9c6d8",
            400: "#8f849a",
            900: "#283333",
          },
          cyan: {
            400: "#15cfcf",
            700: "#10a6a6",
            900: "#095c5c",
            "400_01": "#14cece",
            "400_le": "#15cfcfle",
            "400_lc": "#14cece4c",
            "400_lf": "#15cfcfb2",
            "400_01": "#11afaf",
          },
          deep_orange: {
            900: "#b85b06",
          },
          deep_purple: {
            a200: "#9933ff",
          },
          gray: {
            900: "#1c232f",
            "900_01": "#582900",
            "900_02": "#252010",
            "900_03": "#0a2b4c",
            "900_04": "#0a2b6e",
            "900_05": "#0f218b9",
            "900_06": "#0d243b2",
            "900_b2": "#18181b2",
            "900_b2_01": "#18181b2",
            "900_b2_02": "#0c2b2cc",
          },
          indigo: {
            a700: "#23546e",
          },
          light_blue: {
            600: "#059bd6",
            600_01: "#0093dd",
          },
          light_green: {
            200: "#adfaa0",
          },
          lime: {
            400: "#d3c26e",
            700: "#cc9933",
            900: "#753400",
          },
          orange: {
            a200: "#fdb137",
          },
          purple: {
            200: "#c496cc",
          },
          red: {
            400: "#eb5050",
            "400_01": "#f34e4c",
            "400_4c": "#ec51514c",
          },
          teal: {
            900: "#085353",
            a100_le: "#a2f5f51e",
            a400: "#17e6a1",
            a700: "#15cfa2",
          },
          white: {
            a700: "#ffffff",
            a700_01: "#ffffff",
            a700_0f: "#fffff0f",
            a700_14: "#ffffff14",
            a700_1a: "#ffffff1a",
            a700_1f: "#ffffff1f",
            a700_28: "#ffffff28",
            a700_33: "#ffffff33",
            a700_4c: "#ffffff4c",
            a700_66: "#ffffff66",
            a700_7f: "#ffffff7f",
            a700_99: "#ffffff99",
          },
          yellow: {
            400: "#f9e05f",
            700: "#f4b92e",
            900: "#f4d81b",
            700_01: "#f3ba2f",
          },
        },
        boxShadow: {},
        backgroundImage: {
          gradient1: "linear-gradient(270deg, #9933ff, #11afaf)",
          gradient2: "radial-gradient(180deg, #a2f5f51e, #15cfa2)",
          gradient3: "radial-gradient(180deg, #ffffff4c, #ec51514c)",
          gradient4: "radial-gradient(176deg, #10a6a6, #095c5c)",
          gradient5: "linear-gradient(90deg, #c496cc, #15cfa2)",
          gradient6: "linear-gradient(180deg, #3c87f9, #3c87f9)",
          gradient7: "linear-gradient(180deg, #1c232f, #252010)",
          gradient8: "linear-gradient(180deg, #0a2b4c, #0a2b4c)",
          gradient9: "linear-gradient(180deg, #d3c26e, #0f218b9)",
          gradient10: "linear-gradient(180deg, #f34e4c, #ec51514c)",
          gradient11: "linear-gradient(180deg, #0d0d0d, #0d0d0d)",
        },
        fontFamily: {
          sfprodisplay: "SF Pro Display",
          roboto: "Roboto",
          inter: "Inter",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  };
  