import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
    createStyles({
        title: {
            color: 'green',
            padding: 10,
            margin: 30
        },
        list: {
            width: 300,
        }, 
        fullList: {
            width: 'auto', 
        }
    }
);