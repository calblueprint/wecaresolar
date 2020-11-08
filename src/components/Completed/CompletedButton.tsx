import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

interface CompletedButtonProps {
    id: number;
    isCompleted: boolean;
}

function CompletedButton(props: CompletedButtonProps) {
    const dispatch = useDispatch();
    return(<div><button onClick={() => dispatch(
        setResourceIsCompleted({
            id: props.id,
            isCompleted: !props.isCompleted,
        })
    )}>
        {props.isCompleted ? <RadioButtonUncheckedIcon /> : <FiberManualRecordIcon />}
    </button></div>)
};

export default CompletedButton;