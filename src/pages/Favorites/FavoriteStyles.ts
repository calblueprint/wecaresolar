import { createStyles, Theme, fade } from '@material-ui/core/styles';

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
    // header: {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   padding: '3%'
    // }, 
    title: {
      fontSize: '1.8rem',
      fontWeight: 700,
      color: theme.palette.black.main
    },
    filters: {
      margin: '5%',
      marginLeft: '0%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    filterLabel: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontSize: '.9rem',
      fontWeight: 700,
      color: theme.palette.black.main
    },
    formControl: {
      minWidth: 100,
      maxWidth: 200,
      margin: '0 5%'
    },
    select: {
      fontSize: '.9rem',
      fontWeight: 600,
      color: theme.palette.black.main,
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      boxShadow: '-2px 4px 23px rgba(2, 2, 2, 0.0685)',
      borderRadius: '0.8rem',
      backgroundColor: 'white'
    },
    selectMenu: {
      backgroundColor: 'white',
      width: '3.5rem',
      height: '1rem',
      whiteSpace: 'normal',
      alignSelf: 'center',
      textOverflow: 'ellipsis',
      '&:focus': {
        backgroundColor: 'white'
      }
    },
    icon: {
      paddingRight: '1rem',
      color: theme.palette.black.main
    },
    dropdownStyle: {
      // border: "1px solid black",
      backgroundColor: 'white',
      border: "1px red",
      /* The Rachel */
      boxShadow: '-2px 4px 23px rgba(2, 2, 2, 0.0685)',
      borderRadius: '10px',
      fontSize: '.9rem',
      fontWeight: 600,
      color: theme.palette.black.main,
      // font-style: normal,
      // font-size: 12px;
      // line-height: 15px;  
    }
  });
