import { createStyles, Theme } from '@material-ui/core/styles'
import { create } from 'domain'

export const styles = (theme: Theme) => 
  createStyles({
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
    },
    headerBox: {
      
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

  })