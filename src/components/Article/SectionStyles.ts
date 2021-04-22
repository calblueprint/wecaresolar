import { createStyles, Theme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/icons';
export const styles = (theme: Theme) =>
  createStyles({
    card: {
      width: '70vw',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    labelBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(134, 157, 176, 0.3)',
      width: '75.38px',
      height: '22.96px',
      borderRadius: '4.875px',
      fontFamily: theme.typography.fontFamily,
      fontWeight: 'bold',
      fontSize: '10.6124px',
      lineHeight: '13px',
      color: theme.palette.suitcase.dark,
    },
    title: {
      position: 'relative',
      paddingTop: '12.35px'
    },
    imageDiv: {
      paddingTop: '13px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '35vw',
      objectFit: 'contain',
      borderRadius: '4px'
    },
    text: {
      paddingTop: '12px'
    }
  });
