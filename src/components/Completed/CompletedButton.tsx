import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

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
        {props.isCompleted ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </button></div>)
};

export default CompletedButton;