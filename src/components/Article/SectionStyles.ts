import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    section: {
      position: 'relative',
      top: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '600px',
      height: '300px',
      marginBottom: '36.11px',
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    labelBox: {
      position: 'relative',
      width: '75.38px',
      height: '22.96px',
      top: 0,
      left: 0,
      borderRadius: '4.875px',
      background: 'rgba(134, 157, 176, 0.3)',
      padding: '0.812665px 5.68865px',
    },
    labelText: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      width: '75.38px',
      height: '22.96px',
      top: '4.98px',
      color: theme.palette.suitcase.dark,
      fontFamily: theme.typography.fontFamily,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '10.61px',
      lineHeight: '13px',
      bottomMargin: '0px',
      bottomPadding: '0px'
    },
    title: {
      position: 'relative',
      width: '60vw',
      height: '23.21px',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '23px',
      top: '12.36px',
      left: '0px'
    },
    imageDiv: {
      display: 'flex', 
      width: '100%',
      justifyContent: 'center'
    },
    image: {
      position: 'relative',
      top: '20px',
      height: '20vw',
      //height: '142.26px',
      borderRadius: '4px',
      objectFit: 'contain'
    },
    text: {
      position: 'relative',
      width: '75vw',
      height: '19px',
      lineHeight: '15px',
      color: theme.palette.black.main,
      top: '20px',
      left: '0px'
    },
    textImage: {
      position: 'relative',
      width: '75vw',
      height: '19px',
      lineHeight: '15px',
      color: theme.palette.black.main,
      top: '40px',
      left: '0px'
    }
  });
