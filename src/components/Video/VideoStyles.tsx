import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    page: {
      backgroundColor: theme.palette.black.main,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'scroll',
      padding: theme.spacing(3)
    },
    nonVideo: {
      paddingTop: theme.spacing(3)
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      color: theme.palette.white.main
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'center'
    },
    button: {
      padding: '.5rem',
      paddingLeft: '.9rem',
      paddingRight: '.9rem',
      margin: '.5rem',
      borderRadius: '1rem',

      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',

      fontSize: '1rem',
      fontWeight: 700
    },
    filledButton: {
      border: 'none',
      backgroundColor: theme.palette.white.main,
      color: theme.palette.black.main
    },
    outlineButton: {
      background: 'none',
      borderStyle: 'solid'
    },
    icon: {
      color: theme.palette.black.main
    },
    noDownload: {
      color: theme.palette.white.main,
      borderColor: theme.palette.white.main
    },
    Download: {
      color: theme.palette.success.main,
      borderColor: theme.palette.success.main
    }
  });
