import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '500px',
        borderRadius: 10,
        paddingTop: 15
    },
    rightSide: {
        display: 'flex', 
        flexDirection: 'column', 
    },
    buttonsRow: {
        display: 'flex', 
        flexDirection: 'row'
    },
    manuals: {
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 700,
        backgroundColor: theme.palette.brown.main,
        color: theme.palette.white.main,
        margin: 10,
        padding: 10
    },
    help: {
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 700,
        backgroundColor: theme.palette.white.main,
        color: theme.palette.brown.main,
        margin: 10,
        padding: 10
    }
});