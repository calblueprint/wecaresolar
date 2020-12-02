import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme ) =>
  createStyles({
    card: {
      position: 'relative',
      width: 91,
      height: 91,
      marginRight: 5,
      borderRadius: 10,
      boxShadow: '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',
      backgroundColor: '#F7F9FA'
    },
    title: {
      position: 'absolute',
      width: 91,
      textAlign: 'center',
      paddingTop: 60,
      fontSize: 12,
      fontWeight: 700,
      color: theme.palette.white.main
    },
    image: {
      width: 91,
      height: 91,
      borderRadius: 10
    }
  });