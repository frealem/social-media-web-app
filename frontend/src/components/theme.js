export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#B4F293",
    50: "#8CE961",
    100: "#65E03E",
    200: "#3ED81B",
    300: "#2DCE00",
    400: "#2DCE00",
    500: "#2DCE00",
    600: "#2DCE00",
    700: "#219E00", // Darker green
    800: "#177400", // Even darker green
    900: "#0E4A00", // Darkest green
    1000: "#042524", // Dark green (replacing the existing value)
  },
    primary: {
      // black
      100:"#16DB6C",
      200:"#16DB6C",
      300: "#16DB6C",
      400: "#04471c",
      500: "#04471c" ,
      600: "#0D2818",
      700: "#0D2818",
      800: "#020202", 
      900: "#020202",
    },
    secondary: {
      // purple
      100: "#DCF8C6",
      200: "#B4F293",
      300: "#8CE961",
      400: "#65E03E",
      500: "#3ED81B",
      600: "#2DCE00",
      700: "#2DCE00",
      800: "#2DCE00",
      900: "#2DCE00",
    },
  };
  
  // function that reverses the color palette
  function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[0],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.secondary[200],
                alt: tokensDark.secondary[100],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };