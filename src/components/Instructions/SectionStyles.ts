import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    labelBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(134, 157, 176, 0.3)',
      width: 'fit-content',
      borderRadius: '4.875px',
      color: theme.palette.suitcase.dark,
      padding: theme.spacing(1, 3)
    },
    title: {
      position: 'relative',
      paddingTop: '12.35px'
    },
    imageDiv: {
      paddingTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: '50vw',
      objectFit: 'contain',
      borderRadius: '4px'
    },
    text: {
      paddingTop: theme.spacing(2)
    }
  });
