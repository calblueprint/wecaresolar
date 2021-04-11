import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    page: {
      margin: '25% 3% 15%',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      color: theme.palette.black.main,
      margin: '1rem 0rem'
    },
    summary: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    count: {
      display: 'flex',
      margin: '0.3rem 0.3rem 0.3rem 0rem'
    },
    countText: {
      color: 'rgba(35, 31, 32, 0.4)'
    },
    icon: {
      display: 'flex',
      flexDirection: 'row',
      color: theme.palette.accent3.main,
      marginRight: '0.3rem'
    },
    progressBar: {
      display: 'flex',
      alignItems: 'center',
      margin: '0rem 0.3rem 0.3rem 0rem'
    },
    description: {
      color: theme.palette.black.main,
      padding: '0.3rem 0rem'
    },
    objBox: {
      margin: '0.5rem 0rem'
    },
    subHeader: {
      color: theme.palette.black.main,
      margin: '0.3rem 0rem'
    },
    objList: {
      margin: '0.3rem'
    },
    objective: {
      color: theme.palette.black.main,
      fontWeight: 600,
      margin: '0.2rem'
    }
  });
