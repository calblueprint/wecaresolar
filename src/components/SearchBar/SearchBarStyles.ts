import { createStyles, Theme, fade } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    overrides: {
      AppBar: {
        color: {
          default: theme.palette.background.default,
          background: theme.palette.background.default
        }
      }
    },
    root: {
      flexGrow: 1,
      width: '100%',
      top: 0,
      margin: 100,
      color: theme.palette.background.default,
      backgroundColor: theme.palette.background.default
    },
    search: {
      position: 'relative',
      borderRadius: 9,
      backgroundColor: theme.palette.yellow.main,
      width: '100%',
      margin: '12px 24px',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      color: theme.palette.brown.main,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: theme.palette.brown.main,
      fontWeight: 600,
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      color: theme.palette.brown.main,
      fontWeight: 600,
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
      flexGrow: 1
    }
  });
