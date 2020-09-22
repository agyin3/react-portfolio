import { createMuiTheme } from "@material-ui/core";

// Custom theming settings

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2F424C",
      main: "#1B262C",
      dark: "#101619",
      contrastText: "#BBE1FA",
    },
    secondary: {
      light: "#ECF7FE",
      main: "#BBE1FA",
      dark: "#A0D5F8",
      contrastText: "#1B262C",
    },
    background: {
      default: "#1B262C",
    },
    white: {
      default: "#FFF",
    },
    black: {
      default: "#000",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Montserrat, sans-serif",
  },
});

// Typography Settings

theme.typography.h1 = {
  fontFamily: "Bebas Neue, cursive",
  fontSize: "15rem",
  "@media (min-width: 800px)": {
    fontSize: "20rem",
  },
};

theme.typography.h2 = {
  fontFamily: "Bebas Neue, cursive",
  fontSize: "6.4rem",
  color: theme.palette.secondary.dark,
};

theme.typography.h3 = {
  fontFamily: "Montserrat, cursive",
  fontSize: "2.4rem",
  fontWeight: 700,
  color: theme.palette.secondary.dark,
  display: "inline",
};

export default theme;
