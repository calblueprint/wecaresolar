import React from 'react';
import { createMuiTheme, Theme } from '@material-ui/core/styles';


declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        myCustomColor: Palette['primary']; 
    }
}



const theme  = createMuiTheme({
    palette: {
        myCustomColor: {
            yellow: '#EFC477'
        }, 
        primary: {

        }, 
        secondary: {

        }, 

    }
})

export default theme; 

