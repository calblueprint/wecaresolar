import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import theme from './../../CustomStyles';

interface FavoriteButtonProps {
  id: number;
  isFavorited: boolean;
}

function FavoriteButton(props: FavoriteButtonProps) {
  const dispatch = useDispatch();
  function changeFav() {
    console.log("i cry")
    dispatch(
      setResourceIsFavorited({
        id: props.id,
        isFavorited: !props.isFavorited
      })
    )
  }
  return (
    <div>
      {props.isFavorited ?
        <BookmarkIcon style={{ color: theme.palette.white.main }} onClick={changeFav} /> :
        <BookmarkBorderIcon style={{ color: theme.palette.white.main }} onClick={changeFav} />}
    </div>
  );
}

export default FavoriteButton;
