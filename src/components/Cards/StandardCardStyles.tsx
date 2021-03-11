import { createStyles, Theme, fade } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      top: 0,
      color: theme.palette.background.default,
      backgroundColor: theme.palette.background.default
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    card: {
      borderRadius: 10,
      marginBottom: 12,
      padding: 24,
      backgroundColor: 'white',
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 0
    },
    type: {
      marginTop: 0,
      fontWeight: 'normal',
      fontSize: 12,
      color: theme.palette.grey[400]
    },
    body: {
      fontSize: 12
    }
  });
