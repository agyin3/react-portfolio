import { createMuiTheme } from "@material-ui/core"

// Custom theming settings

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#2F424C",
            main: "#1B262C",
            dark: "#101619",
            contrastText: "#BBE1FA"
        },
        secondary: {
            light: "#ECF7FE",
            main: "#BBE1FA",
            dark: "#A0D5F8",
            contrastText: "#1B262C"
        },
        background: {
            default: "#1B262C"
        },
        white: {
            default: "#FFF"
        },
        black: {
            default: "#000"
        }
    }
})

// Typography Settings

theme.typography.h1 = {
    fontFamily: "Bebas Neue, cursive",
    fontSize: "20rem"
}

theme.typography.h2 = {
    fontFamily: "Bebas Neue, cursive",
    fontSize: "7.2rem"
}

theme.typography.h3 = {
    fontFamily: "Montserrat, cursive",
    fontSize: "2.4rem",
    fontWeight: 700
}

theme.typography.p = {
    fontFamily: "Montserrat, sans-serif"
}

export default theme