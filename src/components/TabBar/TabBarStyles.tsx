import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: 60,
      maxWidth: '100%',
      opacity: 0.65,
      color: theme.palette.black.main,
      padding: '0%',
      '&$selected': {
        width: '100%',
        color: theme.palette.yellow2.main,
        borderTop: 'solid',
        opacity: 1
      }
    },
    fabRoot: {
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.black.main,
      backgroundColor: theme.palette.white.main,
      position: 'fixed',
      bottom: '2.5vh',
      height: '11vh',
      width: '11vh',
      textTransform: 'capitalize',
      '&:hover': {
        color: theme.palette.yellow2.main,
        backgroundColor: theme.palette.white.main,
        opacity: 1,
        border: '3px solid',
        borderColor: theme.palette.yellow2.main
      }
    },
    navbar: {
      position: 'fixed',
      width: '100vw',
      height: '10vh',
      bottom: 0
    },
    selected: {}
  });
