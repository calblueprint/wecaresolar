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
      padding: '1.25rem',
      marginBottom: '0.5rem',
      borderRadius: 18,
      boxShadow: theme.shadows[0]
    },
    cardAll: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      padding: '0rem 1rem 0rem 1rem',
      height: '150px',
      marginBottom: theme.spacing(2),
      borderRadius: 18,
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
      marginTop: '0.5rem'
    },
    spread: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  });
