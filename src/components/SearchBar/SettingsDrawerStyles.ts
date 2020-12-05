import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      color: 'green',
      padding: 10,
      margin: 30
    },
    list: {
      width: 300,
      height: 500
    },
    fullList: {
      width: 'auto'
    }
  });
