import { createMuiTheme } from "@material-ui/core";




// const value in theme
export const paramsThem = {
    color:{
        main:'#2196f3'
    }
}



export const theme = createMuiTheme({
    palette: {
        primary:{
            main: paramsThem.color.main
        },
    },
});



