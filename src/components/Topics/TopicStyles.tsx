import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3)
    },
    tags: {
      display: 'flex',
      opacity: 0.7,
      padding: theme.spacing('10vh', 0, 0, 0),
      fontWeight: 500
    }
  });
