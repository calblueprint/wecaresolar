import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
    createStyles({
        navbar: {
            position: 'fixed',
            width: '100%',
            bottom: 0,
        }
    }
);