import { createStyles, Theme, fade } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.brown.main,
      backgroundColor: 'Transparent',
      border: 'none'
    },
    page: {
      marginTop: '25%',
      margin: '3%',
      overflow: 'scroll',
      display: "flex",
      flexDirection: "column"
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3%'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: theme.palette.brown.main
    },
    filters: {
      display: "flex",
      flexDirection: "row",
      alignItems: "space-around",
      justifyContent: "center"
    },
    link: {
      textDecoration: 'none',
      margin: '1%'
    },
    formControl: {
      minWidth: 100,
      maxWidth: 200,
      margin: "5%",
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
      // backgroundColor: 'white',
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
