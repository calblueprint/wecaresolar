import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.black.main,
      backgroundColor: 'Transparent',
      border: 'none'
    },
    link: {
      textDecoration: 'none',
      margin: '1%'
    },
    page: {
      marginTop: '25%',
      margin: '3%',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1%',
      height: 'fit-content'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: theme.palette.black.main
    },
    dropdown: {
      display: 'flex',
      margin: '0%'
    }
  });
