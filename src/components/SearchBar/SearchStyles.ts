import { createStyles, Theme, fade } from '@material-ui/core/styles';
import { relative } from 'path';
export const styles = (theme: Theme) =>
  createStyles({
    bar: {
      color: theme.palette.black.main,
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none'
    },
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
    search: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      borderRadius: 9,
      backgroundColor: theme.palette.wcsgrey.main,
      width: '100%',
      margin: '0px 4px',
      boxShadow: '-2px 4px 23px 0px rgba(2, 2, 2, 0.0685)',
      zIndex: 2
    },
    searchIcon: {
      padding: theme.spacing(1),
      color: theme.palette.black.main,
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      position: 'relative',
      left: 1,
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 3s ease',
      '&::after': {
        position: 'relative',
        left: 3
      }
    },
    searchButton: {
      margin: 3,
      padding: 3,
      borderRadius: 9,
      backgroundColor: theme.palette.yellow.main,
      color: theme.palette.black.main,
      height: '100%',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animationName: 'slide',
      animationDirection: 'reverse',
      animationIterationCount: 'infinite',
      animationDuration: '3s',
      transition: 'all 3s ease'
    },
    searchIconWrapped: {
      color: theme.palette.black.main,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      width: '100%'
    },
    inputInput: {
      padding: theme.spacing(1),
      color: theme.palette.black.main,
      fontWeight: 600,
      fontSize: '3.5vw',
      width: '100%',
      flexGrow: 1
    },
    searchList: {
      color: theme.palette.brown.main,
      padding: 24,
      paddingTop: 50
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '1%',
      height: 'fit-content'
    },
    backButton: {
      color: 'black',
      cursor: 'pointer',
      margin: '0px 24px'
    },
    dropdown: {
      display: 'flex',
      margin: '0%'
    },
    overlayBackground: {
      height: '100%',
      width: '100%',
      position: 'fixed',
      zindex: '0',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      background: theme.palette.black.main,
      opacity: '0.45',
      overflowX: 'hidden'
    }
  });
