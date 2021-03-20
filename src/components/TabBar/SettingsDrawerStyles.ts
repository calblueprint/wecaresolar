import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      paddingTop: 40,
      margin: 24,
      height: '100vh'
    },
    title: {
      color: 'green',
      padding: 10
    },
    list: {
      width: 300
    },
    fullList: {
      width: 'auto'
    }
  });
