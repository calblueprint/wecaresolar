import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'row',
      width: '500px',
      paddingTop: 15, 
      borderRadius: '10px 10px 0px 0px',
      border: 'none'
    },
    rightSide: {
      display: 'flex',
      flexDirection: 'column'
    },
    buttonsRow: {
      display: 'flex',
      flexDirection: 'row'
    },
    manuals: {
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 700,
      backgroundColor: theme.palette.brown.main,
      color: theme.palette.white.main,
      margin: 10,
      padding: 10, 
      border: 'none',
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',
    },
    help: {
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 700,
      backgroundColor: theme.palette.white.main,
      color: theme.palette.brown.main,
      margin: 10,
      padding: 10, 
      border: 'none', 
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',
    }
  });
