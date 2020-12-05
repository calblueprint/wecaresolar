import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FavoriteStyles';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

interface FavoriteButtonProps {
  id: string;
  isFavorited: boolean;
  classes: any;
}

function FavoriteButton(props: FavoriteButtonProps) {
  const dispatch = useDispatch();
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
    </div>
  );
}

export default withStyles(styles)(FavoriteButton);
