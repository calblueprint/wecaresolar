import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      width: '100%',
      borderRadius: '20px 20px 0px 0px',
      height: '35%',
      backgroundColor: theme.palette.white.main,
      boxShadow: theme.shadows[1],
      position: 'absolute',
      bottom: '10vh'
    },
    img: {
      objectFit: 'contain',
      width: '30%',
      margin: theme.spacing(1)
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
      margin: theme.spacing(2)
    },
    manualsButton: {
      minWidth: 70,
      minHeight: 45,
      color: theme.palette.white.main,
      backgroundColor: theme.palette.black.main,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      border: 'none',
      boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
      borderRadius: theme.spacing(3)
    },
    helpButton: {
      minWidth: 70,
      minHeight: 45,
      color: theme.palette.black.main,
      backgroundColor: theme.palette.white.main,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      border: 'none',
      boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
      borderRadius: theme.spacing(3)
    },
    title: {
      padding: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between'
    }
  });
