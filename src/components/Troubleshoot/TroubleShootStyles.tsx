import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
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