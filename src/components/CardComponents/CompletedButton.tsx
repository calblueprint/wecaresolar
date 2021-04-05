import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as CheckedButton} from './checkedButton.svg';
import { ReactComponent as UncheckedButton} from './uncheckedButton.svg';


interface CompletedButtonProps {
    isCompleted: boolean;
    handleClick(event: any): void;
}

function CompletedButton(props: CompletedButtonProps) {
    return(<div>
        {props.isCompleted ? (
            <SvgIcon viewBox='0 0 15 15' onClick={props.handleClick}>
                <CheckedButton />
            </SvgIcon>
        ) : (
            <SvgIcon viewBox='0 0 15 15' onClick={props.handleClick}>
                <UncheckedButton />
            </SvgIcon>
        )}
    </div>)
};

export default CompletedButton;