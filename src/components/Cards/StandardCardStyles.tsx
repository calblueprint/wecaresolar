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
      padding: 24,
      backgroundColor: theme.palette.white.main,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',

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
      padding: '0px 0px',
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
      alignSelf: 'stretch',

    },
    title: {
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '1.4rem',
    },
    favorite: {
      padding: '0px 0px',
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
      textDecoration: 'none',
      margin: '1%'
    },
  });
