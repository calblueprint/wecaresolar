import { createStyles, Theme } from '@material-ui/core/styles';
import { create } from 'domain';

export const styles = (theme: Theme) =>
  createStyles({
    // dropdown: {
    //   display: 'block',
    //   flexDirection: 'column',
    //   alignItems: 'flex-end',
    //   height: 'fit-content'
    // },
    dropdownButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3% 5% 3% 12%',
      margin: '0% 0%',
      width: '115px',
      backgroundColor: 'white',
      border: '1px red',
      /* The Rachel */
      boxShadow: '-2px 4px 23px rgba(2, 2, 2, 0.0685)',
      borderRadius: '30px',
      fontSize: '.9rem',
      fontWeight: 600,
      color: theme.palette.black.main,
      flexGrow: 1,
      cursor: 'pointer'
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
      width: 'fit-content',
      height: 'fit-content',
      padding: '2%',
      /* White */
      background: 'white',
      /* The Rachel */
      borderRadius: '10px'
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
    checkmark: {
    },
    lineBreak: {
      // height: '5px',
      // fill: '#000000',
      margin: '2%'
    }
  });
