import { createStyles, Theme } from '@material-ui/core/styles'; 

export const styles = (theme: Theme) => 
    createStyles({
      card: {
        display: 'flex',
        width: '100%',
        borderRadius: '20px 20px 0px 0px',
        height: '35%',
        fontSize: '15px',
        fontWeight: 400,
        backgroundColor: '#E5E5E5', 
        position: 'absolute', 
        bottom: '10%'
      },
      img: {
        objectFit: 'contain', 
        width: '30%', 
        margin: '2%'
      },
      rightSide: {
        display: 'flex',
        flexDirection: 'column', 
        padding: '1.0rem',
        width: '70%'
      },
      cancel: {
        fontSize: 40, 
        padding: 20, 
        right: '1%',
        position: 'absolute'
      },
      buttonsRow: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around'
      },
      manualsButton: {
        fontSize: '12px',
        fontWeight: 600,
        color: theme.palette.white.main,
        backgroundColor: theme.palette.black.main,
        padding: '5%',
        border: 'none',
        boxShadow:
          '1px 2.5px 3px 1px rgba(218, 207, 207, 0.5)',
        borderRadius: '1rem',
      },
      helpButton: {
        fontSize: '12px',
        fontWeight: 600,
        color: theme.palette.black.main,
        backgroundColor: theme.palette.white.main,
        padding: '5%',
        border: 'none',
        boxShadow:
          '1px 2.5px 3px 1px rgba(218, 207, 207, 0.5)',
        borderRadius: '1rem',
      }
    })