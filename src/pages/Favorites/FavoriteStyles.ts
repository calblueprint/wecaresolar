import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.black.main,
      backgroundColor: 'Transparent',
      border: 'none'
    },
    link: {
      textDecoration: 'none',
      margin: '1%'
    },
    page: {
      padding: theme.spacing(3),
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 'fit-content',
      paddingBottom: theme.spacing(3)
    },
    dropdown: {
      display: 'flex',
      margin: '0%'
    },
    message: {
      padding: theme.spacing(2)
      // border: '4px solid',
      // borderColor: 'black'
    }
  });
