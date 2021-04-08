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
      boxShadow: '-2px 4px 23px 0px rgba(2, 2, 2, 0.0685)'
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
      flexGrow: 1
    },
    searchList: {
      color: theme.palette.brown.main,
      padding: 24,
      paddingTop: 50
    },
    // searchCard: {
    //   borderRadius: 10,
    //   marginBottom: 12,
    //   padding: 24,
    //   backgroundColor: 'white',
    //   boxShadow:
    //     '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    // },
    // searchTitle: {
    //   fontSize: 14,
    //   fontWeight: 'bold',
    //   marginBottom: 0
    // },
    // searchType: {
    //   marginTop: 0,
    //   fontWeight: 'normal',
    //   fontSize: 12,
    //   color: theme.palette.grey[400]
    // },
    // searchBody: {
    //   fontSize: 12
    // },
    backButton: {
      color: 'black',
      cursor: 'pointer', 
      margin: '0px 24px'
    }
  });
