import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    //main colors
    black: Palette['primary'];
    white: Palette['primary'];
    brown: Palette['primary'];
    navgrey: Palette['primary'];
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
    navgrey: PaletteOptions['primary'];
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
        fontSize: 20,
        fontWeight: 700
      },
      h3: {
        fontSize: 18,
        fontWeight: 700
      },
      body1: {
        fontSize: 14,
        fontWeight: 400
      },
      body2: {
        fontSize: 14,
        fontWeight: 600
      },
      caption: {
        fontSize: 10,
        fontStyle: 'semibold'
      }
    }
  },
  spacing: [0, 6, 12, 18, 24],
  palette: {
    black: {
      main: '#020202'
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
    navgrey: {
      main: '#808080'
    },
    wcsgrey: {
      main: '#E1E1E1',
      dark: '#777777'
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
      main: 'rgba(134, 157, 176, 0.3)',
      dark: 'rgba(42, 83, 117, 1)'
    },
    lights: {
      main: 'rgba(244, 189, 116, 0.3)',
      dark: 'rgba(188, 130, 115, 1)'
    },
    fetaldoppler: {
      main: 'rgba(162, 167, 210, 0.35)',
      dark: 'rgba(112, 117, 160, 1)'
    },
    headlamp: {
      main: 'rgba(238, 172, 172, 0.35)',
      dark: 'rgba(228, 98, 98, 1)'
    },
    charger: {
      main: 'rgba(163, 203, 238, 0.35)',
      dark: 'rgba(107, 173, 232, 1)'
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
