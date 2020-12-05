import { createStyles, Theme, } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    page: {
      backgroundColor: theme.palette.black.main,
      display: 'flex',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      overflow: "scroll",
    },
    nonVideo: {
      padding: '5%',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      color: theme.palette.white.main,
      paddingRight: '5%',
      flex: '10',
    },
    buttons: {
      textAlign: 'center',
    },
    button: {
      padding: '.5rem',
      paddingLeft: '.9rem',
      paddingRight: '.9rem',
      margin: '.5rem',
      borderRadius: '1rem',
      width: '40%',
      alignItems: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      // display: "inline-block",
    },
    filledButton: {
      border: 'none',
      backgroundColor: theme.palette.white.main,
      color: theme.palette.black.main,

    },
    outlineButton: {
      background: 'none',
      borderStyle: 'solid',
    },
    icon: {
      color: theme.palette.black.main,
    },
    noDownload: {
      color: theme.palette.white.main,
      borderColor: theme.palette.white.main,
    },
    Download: {
      color: theme.palette.success.main,
      borderColor: theme.palette.success.main,
    }

  });
