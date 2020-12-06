import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: '15%',
      margin: '3%',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column',
      width: "100%",
      height: "100%"
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 12,
      fontSize: 12,
      fontWeight: 700,
      paddingTop: 32,
      paddingBottom: 12,
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
      fontSize: 24
    },
    bottomPad: {
      paddingBottom: 100
    }
  });
