import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      width: '100%',
      borderRadius: '20px 20px 0px 0px',
      height: '35%',
      backgroundColor: theme.palette.white.main,
      boxShadow: '0px 14px 50px 20px rgba(0,0,0,0.2)',
      position: 'absolute',
      bottom: '10vh'
    },
    img: {
      objectFit: 'contain',
      width: '30%',
      margin: '2%'
    },
    rightSide: {
      display: 'flex',
      flexDirection: 'column',
      margin: '3rem 0.5rem 0rem 0.25rem'
    },
    cancel: {
      fontSize: 30,
      padding: '1.0rem',
      right: '1%',
      position: 'absolute'
    },
    buttonsRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      margin: '0.75rem'
    },
    manualsButton: {
      minWidth: 70,
      minHeight: 45,
      color: theme.palette.white.main,
      backgroundColor: theme.palette.black.main,
      padding: '5%',
      border: 'none',
      boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
      borderRadius: '1rem'
    },
    helpButton: {
      minWidth: 70,
      minHeight: 45,
      color: theme.palette.black.main,
      backgroundColor: theme.palette.white.main,
      padding: '5%',
      border: 'none',
      boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
      borderRadius: '1rem'
    },
    title: {
      padding: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between'
    }
  });
