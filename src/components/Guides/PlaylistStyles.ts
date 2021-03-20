import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    title: {
      fontSize: 18,
      fontWeight: 700
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: 234.18,
      height: 176.23,
      padding: 21,
      marginRight: 13,
      marginBottom: 10,
      borderRadius: 18,
      boxShadow:
        '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)'
    },

    icon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontWeight: 700,
      color: theme.palette.accent3.main
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    spread: {
      display: 'flex',
      justifyContent: 'space-between'
    },

  });
