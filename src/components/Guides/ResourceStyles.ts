import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      fontSize: 18,
      fontWeight: 700
    },
    text: {
      fontSize: 12,
      fontWeight: 400
    },
    articleCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 184,
      height: 130,
      padding: 21,
      marginRight: 12,
      marginBottom: 10,
      borderRadius: 18,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    },
    videoCard: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 226,
      height: 172,
      marginRight: 12,
      marginBottom: '2vw',
      borderRadius: 18,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    },
    videoCardAll: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '62.1vw',
      height: '47.265vw',
      marginRight: 12,
      marginBottom: '2vw',
      borderRadius: 18,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    thumbnail: {
      display: 'relative',
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    favorite: {
      position: 'absolute',
      right: '10.6px',
      top: '10.88px'
    },
    button: {
      position: 'absolute',
      width: '74.08px',
      height: '20px',
      right: '14px',
      bottom: '15px',
      backgroundColor: theme.palette.black.main,
      zIndex: 1
    },
    buttonText: {
      position: 'absolute',
      fontFamily: theme.typography.fontFamily,
      fontSize: '10px',
      color: theme.palette.white.main,
      fontWeight: 500,
      lineHeight: '12px',
      right: '10px'
    },
    clock: {
      position: 'absolute',
      width: '12.31px',
      height: '11.66px',
      color: theme.palette.white.main,
      left: '8px',
      top: '3.77px'
    }
  });
