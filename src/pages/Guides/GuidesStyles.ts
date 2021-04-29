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
      fontWeight: 700
    },
    divider: {
      paddingTop: 32
    },
    scroll: {
      display: 'flex',
      overflow: 'scroll hidden'
    },
    playlistCard: {
      width: 'px'
    },
    list: {
      color: theme.palette.black.main,
      textDecoration: 'none',
      padding: theme.spacing(3)
    }
  });
