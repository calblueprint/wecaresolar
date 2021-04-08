import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    dropdown: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: 'fit-content'
    },
    dropdownButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3% 5% 3% 12%',
      margin: '0rem',
      width: '7rem',
      backgroundColor: 'white',
      border: '1px red',
      /* The Rachel */
      boxShadow: '-2px 4px 23px rgba(2, 2, 2, 0.0685)',
      borderRadius: '30px',
      fontSize: '.9rem',
      fontWeight: 600,
      color: theme.palette.black.main,
      flexGrow: 1,
      cursor: 'pointer',
      position: 'relative',
      zindex: '3'
    },
    buttonLabel: {
      paddingLeft: '5%',
      fontSize: '.9rem',
      fontWeight: 700,
      color: theme.palette.black.main,
      whiteSpace: 'nowrap'
    },
    icon: {
      color: theme.palette.black.main,
      paddingLeft: '5%'
    },
    dropdownPopup: {
      position: 'absolute',
      width: '12rem',
      height: '20rem',
      marginTop: '2.5rem',
      padding: '0.5rem',
      background: 'white',
      borderRadius: '10px',
      zindex: '2',
      overflowY: 'scroll'
    },
    headerBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: '3%'
    },
    header: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: theme.palette.black.main
    },
    selectAll: {
      backgroundColor: 'white',
      border: 'none',
      fontSize: '0.9rem',
      fontWeight: 600,
      color: theme.palette.black.main,
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3%'
    },
    option: {
      fontSize: '0.9rem',
      fontWeight: 700,
      color: theme.palette.black.main
    },
    lineBreak: {
      border: 'none',
      borderTop: '1px solid #E1E1E1',
      overflow: 'visible',
      textAlign: 'center',
      margin: '2%'
    },
    overlayBackground: {
      height: '100%',
      width: '100%',
      position: 'fixed',
      zindex: '0',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      background: theme.palette.black.main,
      opacity: '0.45',
      overflowX: 'hidden'
    }
  });
