import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
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
