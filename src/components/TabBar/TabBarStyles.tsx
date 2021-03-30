import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    navbar: {
      position: 'fixed',
      width: '100%',
      height: '10.8%',
      left: '0%',
      bottom: 0,
      zIndex: 0,
    },
    text: {
      position: 'relative',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.black.main,
      opacity: '0.5',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '15px',
      textAlign: 'center',
    },
    suitcase: {
      topPadding: '16px',
      background: theme.palette.white.main,
      width: '74px',
      height: '74px',
      border: '2px solid #F6B350',
      position: 'fixed',
      bottom: '3.9%',
      left: '45%',
      zIndex: 1,
      boxShadow: '1px 2.5px 3px 1px rgba(218, 207, 207, 0.5)',
      color: "#000000"
    },
    buttontext: {
      topPadding: '5px',
      fontFamily: theme.typography.fontFamily,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '10px',
      lineHeight: '13px',
      textAlign: 'center',
      color: '#F6B350'
    }
  });
