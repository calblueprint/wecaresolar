import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.background.default
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.palette.accent2.main
    },

    card: {
      padding: theme.spacing(3),
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      bottom: 0
    },

    button: {
      borderRadius: '18px',
      maxWidth: '400px',
      marginRight: '1%',
      padding: theme.spacing(1, 2, 1, 2),
      borderStyle: 'none',
      fontWeight: 700,
      textDecoration: 'none'
    },

    buttonBox: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      alignContent: 'center',
      width: '100%',
      height: 60,
      marginBottom: theme.spacing(2),
      borderRadius: 10,
      boxShadow: theme.shadows[0],
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white'
      }
    },

    button_back: {
      fontWeight: 700,
      backgroundColor: theme.palette.black.main,
      color: theme.palette.white.main,
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: theme.palette.black.main
      }
    },

    button_restart: {
      fontWeight: 700,
      backgroundColor: theme.palette.white.main,
      color: theme.palette.black.main,
      boxShadow: theme.shadows[0],
      '&:hover': {
        backgroundColor: theme.palette.white.main
      }
    },

    optionImage: {
      height: 88,
      width: 143,
      backgroundColor: theme.palette.yellow.main,
      borderRadius: '10px 10px 0px 0px'
    },

    optionText: {
      height: 60,
      width: 120,
      padding: '12px 12px 0px 12px',
      backgroundColor: 'white',
      borderRadius: '10px 10px 10px 10px',
      fontSize: 12,
      fontWeight: 700,
      textDecoration: 'none',
      color: theme.palette.black.main
    },

    yes: {
      backgroundColor: theme.palette.tshootyes.main,
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.tshootyes.main
      }
    },

    no: {
      backgroundColor: theme.palette.tshootno.main,
      color: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.tshootno.main
      }
    }
  });
