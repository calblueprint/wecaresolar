import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    videoCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '230px',
      height: '128px',
      borderRadius: 18,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',
      marginRight: theme.spacing(2)
    },
    thumbnail: {
      width: '215px',
      objectFit: 'scale-down'
    },
    videoCardAll: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      borderRadius: 18
    },
    thumbnailAll: {
      width: '80vw',
      objectFit: 'scale-down',
      zIndex: 0
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
