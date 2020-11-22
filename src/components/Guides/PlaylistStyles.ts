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
    tag: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 'fit-content',
      padding: '0.812665px 5.68865px',
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 3.25,
      height: 22.75,
      borderRadius: 4.87599
    },
    lights: {
      color: theme.palette.lights.dark,
      backgroundColor: theme.palette.lights.main
    },
    headlamps: {
      color: theme.palette.headlamp.dark,
      backgroundColor: theme.palette.headlamp.main
    },
    suitcase: {
      color: theme.palette.suitcase.dark,
      backgroundColor: theme.palette.suitcase.main
    },
    defaultTag: {
      backgroundColor: '#ABABAB'
    }
  });
