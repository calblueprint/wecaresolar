import { createStyles, Theme, fade } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.brown.main,
      backgroundColor: 'Transparent',
      border: 'none'

    }
  }
);
