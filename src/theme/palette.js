import { colors } from "@material-ui/core";

const white = "#FFF";
const black = "#000";
const darkBlue = "#003755";
const lightBlue = "#009edd";
const lightSkyBlue = "#7f9baa";

export default {
    black,
    white,
    primary: {
        contrastText: white,
        dark: darkBlue,
        main: darkBlue,
        light: darkBlue
    },
    secondary: {
        contrastText: white,
        dark: lightBlue,
        main: lightBlue,
        light: lightBlue        
    }, 
    default: {
        contrastText: black,
        dark: lightSkyBlue,
        main: lightSkyBlue,
        light: lightSkyBlue        
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200]    
};