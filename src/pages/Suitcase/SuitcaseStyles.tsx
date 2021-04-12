import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => 
    createStyles({
      card: {
        display: 'flex',
        width: '100%',
        borderRadius: '20px 20px 0px 0px',
        height: '35%',
        backgroundColor: theme.palette.white.main, 
        boxShadow:
          '0px 14px 50px 20px rgba(0,0,0,0.2)',
        position: 'absolute', 
        bottom: '10%', 
      },
      img: {
        objectFit: 'contain', 
        width: '30%', 
        margin: '2%'
      },
      rightSide: {
        display: 'flex',
        flexDirection: 'column', 
        margin: '3.5rem 1.0rem 2.0rem 1.0rem',
      },
      cancel: {
        fontSize: 35, 
        padding: '1.0rem', 
        right: '1%',
        position: 'absolute'
      },
      buttonsRow: {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        margin: '2.0rem', 
        fontSize: '12px',
        fontWeight: 600, 
      },
      manualsButton: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: theme.palette.white.main,
        backgroundColor: theme.palette.black.main,
        padding: '5%',
        border: 'none',
        boxShadow:
          '1px 2.5px 3px 2.5px rgba(218, 207, 207, 0.5)',
        borderRadius: '1rem',
      },
      helpButton: {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        color: theme.palette.black.main,
        backgroundColor: theme.palette.white.main,
        padding: '5%',
        border: 'none',
        boxShadow:
          '1px 2.5px 3px 2.5px rgba(218, 207, 207, 0.5)',
        borderRadius: '1rem',
      }
    })