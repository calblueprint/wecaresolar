import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      fontSize: 18,
      fontWeight: 700
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '235px',
      height: '150px',
      padding: theme.spacing(3),
      margin: theme.spacing(2, 3, 1, 0),
      borderRadius: theme.spacing(3),
      boxShadow: theme.shadows[0]
    },
    cardAll: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      padding: theme.spacing(2),
      paddingTop: theme.spacing(1),
      height: '150px',
      marginBottom: theme.spacing(1),
      borderRadius: theme.spacing(3),
      boxShadow: theme.shadows[0]
    },
    icon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontWeight: 700,
      color: theme.palette.accent3.main
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginTop: theme.spacing(1)
    },
    spread: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  });
