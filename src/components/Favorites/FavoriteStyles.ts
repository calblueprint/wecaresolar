import { createStyles, Theme, fade } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      color: theme.palette.brown.main,
      backgroundColor: 'Transparent',
      border: 'none'
    },
    page: {
      marginTop: "10%",
      margin: "3%",
      overflow: "scroll",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingRight: "5%"
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: theme.palette.brown.main
    },
    // root: {
    //   backgroundColor: 'white',
    //   border: 'none',
    //   borderColor: 'white',
    //   borderRadius: '55%',
    //   boxShadow:
    //     '0.896084px 2.38956px 2.98695px 0.896084px rgba(218, 207, 207, 0.5)',

    // },
    // select: {
    //   '&:before': {
    //     border: 'none',
    //   },
    //   '&:after': {
    //     border: 'none',
    //   },
    //   '&:hover': {
    //     border: 'none',
    //     borderColor: 'white',
    //   },
    // },
    // outlined: {
    //   border: 'none',
    // }
  }
  );
