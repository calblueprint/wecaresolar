import { createStyles, Theme } from '@material-ui/core/styles'; 

export const styles = (theme: Theme) => 
    createStyles({
      card: {
        display: 'flex',
        borderRadius: '20px 20px 0px 0px',
        fontSize: '18px',
        fontWeight: 400,
        backgroundColor: '#E5E5E5', 
        position: 'absolute', 
        bottom: '0%'
      },
      img: {
        objectFit: 'cover', 
        width: '30%', 
        margin: '4%'
      },
      rightSide: {
        display: 'flex',
        flexDirection: 'column', 
        padding: '1.0rem',
      },
      cancel: {
        fontSize: 40, 
        padding: 20, 
        right: '1%',
        position: 'absolute'
      },
      buttonsRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
      },
      manualsButton: {
        fontSize: '20px',
        fontWeight: 600,
        color: theme.palette.white.main,
        backgroundColor: theme.palette.black.main,
        margin: '0.5rem',
        padding: '1.0rem',
        border: 'none',
        boxShadow:
          '1px 2.5px 3px 1px rgba(218, 207, 207, 0.5)',
        borderRadius: '1rem',
      },
      helpButton: {
        fontSize: '20px',
        fontWeight: 600,
        color: theme.palette.black.main,
        backgroundColor: theme.palette.white.main,
        margin: '0.5rem',
        padding: '1.0rem',
        border: 'none',
        boxShadow:
          '1px 2.5px 3px 1px rgba(218, 207, 207, 0.5)',
        borderRadius: '1rem',
      }
    })