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
      fontSize: 14,
      fontWeight: 700
    },
    divider: {
      paddingTop: theme.spacing(4)
    },
    scroll: {
      display: 'flex',
      overflow: 'scroll hidden'
    },
    playlistCard: {
      width: '300px'
    },

    list: {
      color: theme.palette.black.main,
      textDecoration: 'none',
      paddingRight: theme.spacing(3)
    }
  });
