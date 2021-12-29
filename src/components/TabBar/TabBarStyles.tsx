import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: 60,
      maxWidth: '100%',
      color: theme.palette.navgrey.main,
      padding: '0%',
      '&$selected': {
        width: '100%',
        color: theme.palette.yellow2.main,
        borderTop: 'solid'
      }
    },
    fabRoot: {
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.navgrey.main,
      backgroundColor: theme.palette.white.main,
      position: 'fixed',
      bottom: '2.5vh',
      height: '11vh',
      width: '11vh',
      textTransform: 'capitalize',
      boxShadow: theme.shadows[1],
      '&:hover': {
        color: theme.palette.yellow2.main,
        backgroundColor: theme.palette.white.main,
        border: '3px solid',
        borderColor: theme.palette.yellow2.main
      }
    },
    navbar: {
      position: 'fixed',
      width: '100vw',
      height: '10vh',
      bottom: 0,
      zIndex: 10
    },
    selected: {}
  });
