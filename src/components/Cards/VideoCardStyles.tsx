import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    videoCard: {
      display: 'flex',
      justifyContent: 'center',
      width: '230px',
      height: '128px',
      borderRadius: theme.spacing(3),
      boxShadow: theme.shadows[0],
      margin: theme.spacing(2, 3, 3, 0),
      padding: theme.spacing(2, 1, 0, 1)
    },
    thumbnail: {
      width: '80%',
      objectFit: 'contain',
      zIndex: 0
    },
    videoCardAll: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      borderRadius: theme.spacing(3)
    },
    complete: {
      position: 'absolute',
      top: '2vw',
      left: '2vw',
      zIndex: 10
    },
    favorite: {
      position: 'absolute',
      top: '2vw',
      right: '2vw',
      zIndex: 10
    },
    button: {
      position: 'absolute',
      width: '74.08px',
      height: '20px',
      bottom: '2vw',
      right: '2vw',
      backgroundColor: theme.palette.black.main,
      zIndex: 1
    },
    clock: {
      color: theme.palette.white.main,
      width: '12.31px',
      height: '12.31px',
      marginRight: theme.spacing(4)
    },
    duration: {
      color: theme.palette.white.main,
      fontSize: '10px'
    }
  });
