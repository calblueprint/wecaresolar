import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.background.default,
    },

    header: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.palette.accent2.main,
      fontWeight: 500,
    },

    card: {
      margin: '10%',
      position: "relative",
      height: '100vh',
      width: '100%',
      bottom: 0,

    },
    button: {
      borderRadius: '18px',
      marginRight: '1%',
      paddingRight: '2%',
      paddingLeft: '2%',
      borderStyle: 'none',
    },
    optionContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: 400,
    },
    optionImage: {
      height: 88,
      width: 143,
      backgroundColor: theme.palette.yellow.main,
      borderRadius: '10px 10px 0px 0px'
    },
    optionCard: {
      height: 60,
      marginRight: 48,
      marginBottom: 32,
      borderRadius: 10,
      width: 120, 
      boxShadow: '10px 8px 12px 8px rgba(218, 207, 207, 0.6)',
      backgroundColor: 'white',
    },
    optionText: {
      height: 60,
      width: 120,
      padding: "12px 12px 0px 12px",
      backgroundColor: 'white',
      borderRadius: '10px 10px 10px 10px',
      fontSize: 12,
      fontWeight: 700,
      textDecoration: 'none',
      color: theme.palette.black.main,
    },
    yes: {
      backgroundColor: theme.palette.tshootyes.main,
      // color: theme.palette.white.main,
    },
    no: {
      backgroundColor: theme.palette.tshootno.main,
      // color: theme.palette.white.main,
    }
  }
  );