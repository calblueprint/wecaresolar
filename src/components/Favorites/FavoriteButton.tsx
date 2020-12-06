import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FavoriteStyles';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import theme from './../../CustomStyles';

interface FavoriteButtonProps {
  id: number;
  isFavorited: boolean;
  classes: any;
}

function FavoriteButton(props: FavoriteButtonProps) {
  const dispatch = useDispatch();
  function changeFav() {
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

export default withStyles(styles)(FavoriteButton);
