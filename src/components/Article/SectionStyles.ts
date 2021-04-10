import { createStyles, Theme, } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
  createStyles({
    labelBox: {
        position: "relative",
        width: "75.38px",
        height: "22.96px",
        top: "107.19px",
        left: "24px",
        borderRadius: "4.88px",
        background: "rgba(134, 157, 176, 0.3)",
        padding: "0.812665px 5.68865px",
    },
    labelText: {
        position: "absolute",
        width: "64px",
        height: "13px",
        color: "#2A5375",
        fontFamily: theme.typography.fontFamily,
        fontWeight: "bold",
        fontSize: "10.61px",
        lineHeight: "13px",
        top: "4.98px",
        left: "25px"
    },
    title: {
        width: "312px",
        height: "23.21px",
        position: "absolute",
        fontFamily: theme.typography.fontFamily,
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight:"23px",
        color: theme.palette.black.main,
        top: "35.32px",
        left: "0px"
    },
    image: {
        position: "absolute",
        width: "189.68px",
        height: "142.26px",
        top: "70px",
        left: "0px"
    },
    text: {
        position: "absolute",
        width: "312px",
        height: "19px",
        fontFamily: theme.typography.fontFamily,
        fontSize: "12px",
        lineHeight: "15px",
        color: theme.palette.black.main,
        top: "230px",
        left: "0px"
    }
});