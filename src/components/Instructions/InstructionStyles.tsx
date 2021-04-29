import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    fixed: {
      position: 'fixed',
      top: '60px',
      width: '100%',
      height: '100px',
      backgroundColor: '#FAFAFA',
      zIndex: 1
    },
    title: {
      position: 'fixed',
      width: '100vw',
      top: '75px',
      left: '1.5vw'
    },
    progressBar: {
      position: 'fixed',
      width: '100%',
      left: '1.5vw',
      marginTop: '60px'
    },
    progressText: {
      position: 'fixed',
      left: '73vw',
      marginTop: '55px',
      opacity: '0.4'
    },
    sections: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left'
    }
  });
