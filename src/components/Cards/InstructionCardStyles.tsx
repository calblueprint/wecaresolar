import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      top: 0,
      color: theme.palette.background.default,
      backgroundColor: theme.palette.background.default
    },
    card: {
      borderRadius: 10,
      marginBottom: 12,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.white.main,
      boxShadow: theme.shadows[0]
    },
    box: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    buttonColumn: {
      display: 'flex',
      alignItems: 'flex-start',
      marginRight: '1rem'
    },
    contentColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifySelf: 'stretch',
      flexGrow: 1
    },
    titleButtonRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignSelf: 'stretch'
    },
    favorite: {
      marginLeft: '0.2rem'
    },
    type: {
      marginTop: 0,
      fontWeight: 'normal',
      fontSize: 12,
      color: theme.palette.grey[400]
    },
    body: {
      fontSize: '0.9rem',
      lineHeight: '1.1rem',
      fontWeight: 'normal'
    },
    link: {
      textDecoration: 'none'
    },
    articleCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 184,
      height: 130,
      padding: theme.spacing(2),
      paddingTop: theme.spacing(4),
      margin: theme.spacing(2, 3, 1, 0),
      borderRadius: 18,
      boxShadow: theme.shadows[0]
    }
  });
