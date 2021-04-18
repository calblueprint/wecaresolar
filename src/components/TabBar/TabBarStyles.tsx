import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.black.main,
      padding: '0%',
      "&$selected": {
        color: theme.palette.yellow2.main,
        opacity: 1,
        borderTop: "solid"
      },
    },
    fabRoot: {
      display: 'flex', 
      flexDirection: 'column',
      color: theme.palette.black.main,
      backgroundColor: theme.palette.background.default,
      position: 'fixed',
      bottom: '2.5vh',
      height: '10vh',
      width: '10vh',
      textTransform: 'capitalize',
      '&:hover': {
        color: theme.palette.yellow2.main,
        border: '4px solid',
        borderColor: theme.palette.yellow2.main,
      },
    },
    navbar: {
      position: 'fixed',
      width: '100vw',
      height: '10vh',
      bottom: 0,
    },
    selected: {},
  });
