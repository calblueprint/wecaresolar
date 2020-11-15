import React from 'react';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { Palette } from "@material-ui/core/styles/createPalette";

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
      main?: Palette['primary']
      general?: Palette['primary']
      suitcase?: Palette['primary']
      lights?: Palette['primary']
      fetaldoppler?: Palette['primary']
      headlamp?: Palette['primary']
      charger?: Palette['primary']
      phonecharger?: Palette['primary']
    }
    interface PaletteOptions {
      main?: PaletteOptions['primary']
      general?: PaletteOptions['primary']
      suitcase?: PaletteOptions['primary']
      lights?: PaletteOptions['primary']
      fetaldoppler?: PaletteOptions['primary']
      headlamp?: PaletteOptions['primary']
      charger?: PaletteOptions['primary']
      phonecharger?: PaletteOptions['primary']
    }
  }


const theme  = createMuiTheme({
    palette: {
        main: {
          main: '#F6DBB7',
          dark: '4F2A1D'
        },
        general: { 
          main: '#F7F4F3',
          dark: '#231F20'
        }, 
        suitcase: {
          main: '#9FB8D8', 
          dark: '#2A5375'
        }, 
        lights: {
          main: '#FCEBD5',
          dark: '#DBB079'
        }, 
        fetaldoppler: {
          main: '#777CA6',
          dark: '#4B5288'
        },
        headlamp: {
          main: '#D49BA9',
          dark: '#C0677D'
        },
        charger: {
          main: '#DBE2E7',
          dark: '#4D6A6D'
        },
        phonecharger: {
          main: '#E4CDC7',
          dark: '#BD9084'
        },
    }
})

export default theme; 

