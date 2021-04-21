import React from 'react';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    //main colors
    black: Palette['primary'];
    white: Palette['primary'];
    brown: Palette['primary'];
    wcsgrey: Palette['primary'];
    yellow: Palette['primary'];
    yellow2: Palette['primary'];
    accent1: Palette['primary'];
    accent2: Palette['primary'];
    accent3: Palette['primary'];
    //troubleshooting buttons
    tshootyes: Palette['primary'];
    tshootno: Palette['primary'];
    tshootreport: Palette['primary'];
    tshootrestart: Palette['primary'];
    //appliances
    main: Palette['primary'];
    general: Palette['primary'];
    suitcase: Palette['primary'];
    lights: Palette['primary'];
    fetaldoppler: Palette['primary'];
    headlamp: Palette['primary'];
    charger: Palette['primary'];
    phonecharger: Palette['primary'];
    thermometer: Palette['primary'];
  }
  interface PaletteOptions {
    //main colors
    black: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    brown: PaletteOptions['primary'];
    wcsgrey: PaletteOptions['primary'];
    yellow: PaletteOptions['primary'];
    yellow2: PaletteOptions['primary'];
    accent1: PaletteOptions['primary'];
    accent2: PaletteOptions['primary'];
    accent3: PaletteOptions['primary'];
    //troubleshooting buttons
    tshootyes: PaletteOptions['primary'];
    tshootno: PaletteOptions['primary'];
    //applicances
    main: PaletteOptions['primary'];
    general: PaletteOptions['primary'];
    suitcase: PaletteOptions['primary'];
    lights: PaletteOptions['primary'];
    fetaldoppler: PaletteOptions['primary'];
    headlamp: PaletteOptions['primary'];
    charger: PaletteOptions['primary'];
    phonecharger: PaletteOptions['primary'];
    thermometer: PaletteOptions['primary'];
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Source Sans Pro'].join(',')
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 24,
        fontWeight: 700
      },
      h2: {
        fontSize: 18,
        fontWeight: 700
      },
      h3: {
        fontSize: 14,
        fontWeight: 700
      },
      //can we please change body1 to 14
      body1: {
        fontSize: 12,
        fontWeight: 400
      },
      body2: {
        fontSize: 12,
        fontWeight: 600
      },
      caption: {
        fontSize: 9,
        fontStyle: 'semibold'
      }
    }
  },
  spacing: [0, 6, 12, 18, 24],
  palette: {
    black: {
      main: '#333333'
    },
    white: {
      main: '#FFFFFF'
    },
    brown: {
      main: '#4F2A1D'
    },
    yellow: {
      main: '#F6DBB7'
    },
    wcsgrey: {
      main: '#E1E1E1'
    },
    yellow2: {
      main: '#F6B350'
    },
    accent1: {
      main: '#F6DBB7'
    },
    accent2: {
      main: '#C0677D'
    },
    accent3: {
      main: '#B7B7B7'
    },
    //troubleshooting buttons
    tshootyes: {
      main: '#33BF68'
    },
    tshootno: {
      main: '#E03633'
    },
    //applicances
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
    thermometer: {
      main: '#E4CFCA',
      dark: '#BC8273'
    }
  }
});

export default theme;
