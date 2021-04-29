import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    videoCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '230px',
      height: '128px',
      borderRadius: 18,
      boxShadow:
        'box-shadow: 0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',
      marginRight: theme.spacing(2),
    },
    thumbnail: {
      width: '230px',
      objectFit: 'fill',
    },
    videoCardAll: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2),
      width: '40vw',
      height: '23.79vw',
      borderRadius: 18
    },
    thumbnailAll: {
      width: '40vw',
      objectFit: 'contain',
      zIndex: 0
    },
    favorite: {
      position: 'absolute',
      top: '16px',
      left: '90%',
      zIndex: 1
    },
    button: {
      position: 'absolute',
      width: '74.08px',
      height: '20px',
      top: '84.04%',
      left: '31vw',
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
