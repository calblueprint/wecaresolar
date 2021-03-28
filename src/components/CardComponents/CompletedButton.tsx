import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './CardButtonStyles';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as CheckedButton} from './checkedButton.svg';
import { ReactComponent as UncheckedButton} from './uncheckedButton.svg';


interface CompletedButtonProps {
    id: number;
    isCompleted: boolean;
    classes: any;
}

function CompletedButton(props: CompletedButtonProps) {
    const { classes } = props;
    const dispatch = useDispatch();
    function handleOverlay(event) {
        event.preventDefault();
        // event.stopPropagation();
        dispatch(
            setResourceIsCompleted({
                id: props.id,
                isCompleted: !props.isCompleted,
            }))
    };
    return(<div>
        {/* <button 
            onClick={handleOverlay}
            className={classes.checkmark}
        >
            {props.isCompleted ? (<SvgIcon viewBox='0 0 15 15'><CheckedButton></CheckedButton></SvgIcon>) : (<SvgIcon viewBox='0 0 15 15'><UncheckedButton /></SvgIcon>)}
        </button> */}
        {props.isCompleted ? (
            <SvgIcon viewBox='0 0 15 15' onClick={handleOverlay}>
                <CheckedButton className={classes.checkmark} />
            </SvgIcon>
        ) : (
            <SvgIcon viewBox='0 0 15 15' onClick={handleOverlay}>
                <UncheckedButton className={classes.checkmark} />
            </SvgIcon>
        )}
    </div>)
};

export default withStyles(styles)(CompletedButton);