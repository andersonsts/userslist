import { createMuiTheme } from '@material-ui/core/styles';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    textColor: Palette['primary'];
    terciary: Palette['primary'];
  }
  interface PaletteOptions {
    textColor: PaletteOptions['primary'];
    terciary: PaletteOptions['primary'];
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#323232',
    },
    secondary: {
      main: 'rgba(254,82,0,1.0)',
    },
    terciary: {
      main: 'rgba(213,150,31,1)'
    },
    background: {
      default: '#222222'
    },
    text: {
      primary: '#fff'
    },
    textColor: {
      main: 'rgba(255,184,0,1)'
    }
  }
});

export default theme;