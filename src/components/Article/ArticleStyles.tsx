import { createStyles, Theme, } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
      title: {
          position: 'relative',
          top: '75px',
          left: '6vw',
          fontFamily: theme.typography.fontFamily,
          fontStyle: theme.typography.h1.fontStyle,
          fontSize: theme.typography.h1.fontSize,
          color: theme.palette.black.main
      },
      sectionView: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
      }
});