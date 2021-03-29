import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as FilledBookmark} from './filledBookmark.svg';
import { ReactComponent as UnfilledBookmark} from './unfilledBookmark.svg';

interface FavoriteButtonProps {
  id: number;
  isFavorited: boolean;
}

function FavoriteButton(props: FavoriteButtonProps) {
  const dispatch = useDispatch();
  function changeFav(event) {
    event.preventDefault();
    dispatch(
      setResourceIsFavorited({
        id: props.id,
        isFavorited: !props.isFavorited
      })
    );
  }
  return (
    <div>
      {props.isFavorited ? (
        <SvgIcon viewBox='0 0 18 18' onClick={changeFav}>
          <FilledBookmark />
        </SvgIcon>
      ) : (
        <SvgIcon viewBox='0 0 18 18' onClick={changeFav}>
          <UnfilledBookmark />
        </SvgIcon>
      )}
    </div>
  );
}

export default FavoriteButton;
