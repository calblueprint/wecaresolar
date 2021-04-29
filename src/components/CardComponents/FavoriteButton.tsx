import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
import { ReactComponent as FavoritedIcon } from './icons/FavoritedIcon.svg';
import { ReactComponent as UnfavoritedIcon } from './icons/UnfavoritedIcon.svg';

interface FavoriteButtonProps {
  id: string;
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
        <FavoritedIcon onClick={changeFav}/> 
      ) : (
        <UnfavoritedIcon onClick={changeFav}/>
      )}
    </div>
  );
}

export default FavoriteButton;
