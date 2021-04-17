import { createStyles, Theme, } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
      title: {
          position: 'fixed',
          top: '75px',
          left: '6vw',
          fontFamily: theme.typography.fontFamily,
          fontStyle: theme.typography.h1.fontStyle,
          fontSize: theme.typography.h1.fontSize,
          color: theme.palette.black.main
      },
      progressBar: {
          position: 'fixed',
          top: '126px',
          left: '6vw',
          width: '75%'
      },
      progressText: {

      },
      sectionView: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
      }
});