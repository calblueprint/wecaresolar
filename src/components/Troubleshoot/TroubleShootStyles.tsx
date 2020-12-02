import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.background.default
    },
    header: {
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.palette.accent2.main,
    },
    card: {
      margin: '10%',
      position: "relative",
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
      height: 143,
      marginRight: 24,
      marginBottom: 24,
      borderRadius: 10,
      width: 143
    },
    optionText: {
      height: 55,
      width: 119,
      padding: "12px 12px 0px 12px",
      backgroundColor: 'white',
      borderRadius: '0px 0px 10px 10px',
      fontSize: 12,
      fontWeight: 700,
      textDecoration: 'none',
      color: theme.palette.brown.main
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