import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    topicScroll: {
      display: "flex",
      overflowX: "scroll",
      width: "360px",
      paddding: "20px",
      marginTop: "0px",
    },
  });
