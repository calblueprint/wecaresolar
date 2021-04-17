import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      paddingRight: 0
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 12,
      fontWeight: 700,
      color: theme.palette.brown.main
    },
    scroll: {
      display: 'flex',
      overflow: 'scroll hidden'
    },
    playlistCard: {
      width: '300px'
    },
    title: {
      fontSize: 24,
      paddingTop: 32
    },
    list: {
      //change styling later on
      paddingTop: 32
    }
  });
