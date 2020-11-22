import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      fontSize: 18,
      fontWeight: 700
    },
    card: {
      width: 234.18,
      height: 176.23,
      padding: 21,
      margin: 21,
      borderRadius: 18,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    },
    lightsTag: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0.812665px 5.68865px',
      backgroundColor: theme?.palette?.lights?.main,
      height: 22.75,
      borderRadius: 4.87599
    }
  });
