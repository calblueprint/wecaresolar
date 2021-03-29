import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as CheckedButton} from './checkedButton.svg';
import { ReactComponent as UncheckedButton} from './uncheckedButton.svg';


interface CompletedButtonProps {
    id: number;
    isCompleted: boolean;
}

function CompletedButton(props: CompletedButtonProps) {
    const dispatch = useDispatch();
    function handleOverlay(event) {
        event.preventDefault();
        event.stopPropagation();
        dispatch(
            setResourceIsCompleted({
                id: props.id,
                isCompleted: !props.isCompleted,
            }))
    };
    return(<div>
        {props.isCompleted ? (
            <SvgIcon viewBox='0 0 15 15' onClick={handleOverlay}>
                <CheckedButton />
            </SvgIcon>
        ) : (
            <SvgIcon viewBox='0 0 15 15' onClick={handleOverlay}>
                <UncheckedButton />
            </SvgIcon>
        )}
    </div>)
};

export default CompletedButton;