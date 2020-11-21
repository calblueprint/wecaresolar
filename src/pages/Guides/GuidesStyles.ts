import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    playlistScroll: {
      display: 'flex',
      overflow: 'scroll'
    },
    playlistCard: {
      width: '300px'
    }
  });
