import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    navbar: {
      position: 'fixed',
      width: '100%',
      height: '8vh',
      left: '0%',
      bottom: 0,
      zIndex: 0,
      indicatorColor: {
        color: theme.palette.yellow2.main
      }
    },
    label: {
      position: 'relative',
      paddingTop: '7px',
      fontFamily: theme.typography.fontFamily,
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '15px',
      textAlign: 'center',
      letterSpacing: '0.1px'
    },
    suitcase: {
      background: theme.palette.white.main,
      height: '90px',
      width: '90px',
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
      height: '37px',
      width: '37px',
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
      letterSpacing: '0.8px'
    },
    icons: {
      float:"left",
      width:"30%",
      height: "30%",
    },
    root: {
      color: theme.palette.black.main,
      opacity: 0.5,
      "&$selected": {
        color: theme.palette.yellow2.main,
        opacity: 1
      },
    },
    selected: {},
    fabDiv: {
      display: "flex",
      width: "100%",
      justifyContent: "center"
    }
  });
