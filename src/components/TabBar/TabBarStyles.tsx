import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    fabDiv: {
      display: "flex",
      width: "100%",
      justifyContent: "center"
    },
    suitcase: {
      background: theme.palette.white.main,
      height: '10vw',
      maxHeight: '100px',
      width: '10vw',
      maxWidth: '100px',
      border: '4px solid',
      borderColor: theme.palette.yellow2.main,
      position: 'fixed',
      bottom: '2.5vh',
      zIndex: 1,
      boxShadow: '1px 2.5px 3px 1px rgba(218, 207, 207, 0.5)',
    },
    goldsuitcase: {
      position: 'relative',
      top: '12px',
      height: "min(4vw, 4vh)",
      maxHeight: '50px',
      width: "min(4vw, 4vh)",
      maxWidth: '50px',
      alignContent: 'center',
    },
    buttontext: {
      textTransform: 'capitalize',
      position: 'relative',
      top: '-6px',
      fontFamily: theme.typography.fontFamily,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      textAlign: 'center',
      color: theme.palette.yellow2.main,
    },

    navbar: {
      position: 'fixed',
      width: '100vw',
      height: '10vh',
      minHeight: "60px",
      left: '0%',
      bottom: 0,
      zIndex: 0,
      indicatorColor: {
        color: theme.palette.yellow2.main
      }
    },
    root: {
      width: "100%",
      color: theme.palette.black.main,
      opacity: 0.5,
      padding: "1% 0% 1% 0%",
      "&$selected": {
        width: "100%",
        color: theme.palette.yellow2.main,
        opacity: 1,
        borderTop: "solid",
        padding: "1% 0% 1% 0%",

      },
    },
    label: {
      position: 'relative',
      paddingTop: '3%',
      fontFamily: theme.typography.fontFamily,
      fontSize: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
      letterSpacing: '0.1px'
    },
    icons: {
      float: "left",
      width: "min(4vw, 4vh)",
      maxWidth: '50px',
      height: "min(4vw, 4vh)",
      maxHeight: '50px'
    },
    selected: {},

  });
