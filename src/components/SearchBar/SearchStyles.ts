import { createStyles, Theme, fade } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    bar: {
      color: theme.palette.brown.main,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none'
    },
    root: {
      flexGrow: 1,
      width: '100%',
      top: 0,
      position: 'absolute',
      color: theme.palette.background.default,
      backgroundColor: theme.palette.background.default
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    search: {
      position: 'relative',
      borderRadius: 9,
      backgroundColor: theme.palette.wcsgrey.main,
      width: '100%',
      margin: '0px 4px',
      boxShadow: theme.spacing[1]
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: theme.palette.black.main,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: theme.palette.black.main,
      fontWeight: 600,
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      color: theme.palette.black.main,
      fontWeight: 500,
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
      flexGrow: 1
    },
    searchList: {
      color: theme.palette.brown.main,
      padding: 24,
      paddingTop: 50
    },
    backButton: {
      color: 'black',
      cursor: 'pointer',
      margin: '0px 24px'
    }
  });
