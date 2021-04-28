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
      marginRight: '13px'
    },
    thumbnail: {
      width: '230px',
      height: '128px',
      objectFit: 'contain'
    },
    videoCardAll: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: '12px',
      width: '40vw',
      height: '23.79vw',
      borderRadius: 18
    },
    thumbnailAll: {
      width: '40vw',
      height: '23.79vw',
      objectFit: 'contain',
      zIndex: 0
    },
    button: {
      top: '0px',
      zIndex: 1
    }
    /** 
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
      justifyContent: 'flex-end',
      color: '#000'
    },
    thumbnail: {
        height: '100px',
        width: '100px'
    } */
  });
