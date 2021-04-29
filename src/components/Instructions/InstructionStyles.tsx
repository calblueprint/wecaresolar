import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    fixed: {
      position: 'fixed',
      top: '60px',
      height: '90px',
      backgroundColor: '#FAFAFA',
      zIndex: 1
    },
    title: {
      position: 'fixed',
      top: '75px',
      left: '1.7vw'
    },
    progressBar: {
      position: 'fixed',
      marginTop: '60px'
    },
    sections: {
      marginTop: theme.spacing(4) * 2.5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left'
    }
  });
