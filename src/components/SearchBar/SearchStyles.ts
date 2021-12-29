import { createStyles, Theme, fade } from '@material-ui/core/styles';
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
      margin: theme.spacing(0, 1),
      padding: theme.spacing(0, 1, 0, 0),
      boxShadow: '-2px 4px 23px 0px rgba(2, 2, 2, 0.0685)',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
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
    clearButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    clearIcon: {
      width: '0.8em',
      opacity: '0.6'
    },
    searchList: {
      color: theme.palette.black.main,
      padding: theme.spacing(4),
      paddingTop: '15vw',
      paddingBottom: 72
    },
    backButton: {
      color: 'black',
      cursor: 'pointer',
      margin: theme.spacing(0, 3)
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 'fit-content'
    },
    searchHeader: {
      margin: theme.spacing(2, 0)
    }
  });
