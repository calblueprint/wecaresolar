import { createStyles, Theme, fade } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 2, 1, 2),
      color: theme.palette.black.main
    },
    button: {
      color: theme.palette.brown.main,
      backgroundColor: 'Transparent',
      border: 'none'
    },
    header: {
      display: 'flex',
      flexDirection: 'column'
    },
    countText: {
      opacity: 0.7,
      padding: theme.spacing(1)
    },
    filters: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'space-around',
      justifyContent: 'center'
    },
    link: {
      textDecoration: 'none',
      margin: '1%'
    },
    formControl: {
      minWidth: 100,
      maxWidth: 200,
      margin: '5%'
    },
    select: {
      fontSize: '.9rem',
      fontWeight: 600,
      color: theme.palette.brown.main,
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',
      borderRadius: '1rem'
    },
    selectMenu: {
      alignSelf: 'center',
      alignItems: 'center',
      '&:focus': {
        backgroundColor: 'white'
      }
    },
    icon: {
      paddingRight: '1rem'
    }
  });
