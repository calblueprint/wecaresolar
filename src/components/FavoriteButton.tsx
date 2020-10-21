import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../store/resourcesSlice';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';


interface FavoriteButtonProps {
  id: number;
  isFavorited: boolean;
}

function FavoriteButton(props: FavoriteButtonProps) {

  const dispatch = useDispatch();
  return (<div><button onClick={() => dispatch(
    setResourceIsFavorited({
      id: props.id,
      isFavorited: !props.isFavorited,
    })
  )}>
    {props.isFavorited ? <BookmarkIcon /> : <BookmarkBorderIcon />}
  </button></div>)
};

export default FavoriteButton;