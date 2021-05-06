import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    fixed: {
      position: 'fixed',
      flex: 'column',
      top: 50,
      height: 'fit-content',
      backgroundColor: '#FAFAFA',
      zIndex: 1
    },
    title: {
      padding: theme.spacing(3, 3),
      display: 'flex'
    },
    progressBar: {
      padding: theme.spacing(0, 3, 3, 3),
      display: 'flex'
    },
    sections: {
      marginTop: '15vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left'
    }
  });
