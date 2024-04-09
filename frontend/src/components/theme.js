export const tokensDark = {
    grey: {
      // 0: "#ffffff", // manually adjusted
      // 10: "#f6f6f6", // manually adjusted
      // 50: "#f0f0f0", // manually adjusted
      // 100: "#e0e0e0",
      // 200: "#c2c2c2",
      // 300: "#a3a3a3",
      // 400: "#858585",
      // 500: "#666666",
      // 600: "#525252",
      // 700: "#3d3d3d",
      // 800: "#292929",
      // 900: "#141414",
      // 1000: "#000000", 
      0: "#ffffff",
      10: "#C78AF0",
      50: "#AB50E8",
      100: '#8F16E0',
      200: '#A020F0 ',
      300: '#7812C8',
      400: '#6010A0',
      500: '#480E78',
      600: '#300C50',
      700: '#300C50',
      800: '#300C50',
      900: '#300C50',
      1000: '#300C50',
          // manually adjusted
    },
    primary: {
      // black
      100: "#333333",
      200: "#666666",
      300: "#999999",
      400: "#CCCCCC",
      500: "#480E78" ,
      600: "#000000",
      700: "#000000",
      800: "#000000", 
      900: "#000000"
    },
    secondary: {
      // purple
      100: "#E3C4F8",
200: "#C78AF0",
300: "#AB50E8",
400: '#8F16E0',
500: '#A020F0 ',
600: '#7812C8',
700: '#6010A0',
800: '#480E78',
900: '#300C50'
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
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
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