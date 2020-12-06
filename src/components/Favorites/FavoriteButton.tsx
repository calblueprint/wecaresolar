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
<<<<<<< HEAD
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
=======
  const { classes } = props;
  return (
    <div>
      <button
        className={classes.button}
        onClick={() =>
          dispatch(
            setResourceIsFavorited({
              id: props.id,
              isFavorited: !props.isFavorited
            })
          )
        }
      >
        {props.isFavorited ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </button>
>>>>>>> f5f176eb2cce196e573926ddd931d318baa8b1f7
    </div>
  );
}

export default withStyles(styles)(FavoriteButton);
