import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    navbar: {
      position: 'fixed',
      width: '100%',
      bottom: 0
    },
    text: {
      font: 'Roboto',
      color: theme.palette.brown.main,
      fontSize: '12px',
      fontWeight: 700,
      '&$selected': {
        color: theme.palette.primary.main
      }
    },
    selected: {
      color: theme.palette.brown.main
    }
  });
