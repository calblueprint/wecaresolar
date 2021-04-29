import React from 'react';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';

interface FavoriteButtonProps {
  id: string;
  isFavorited: boolean;
  fillColor: string;
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
        // <FavoritedIcon onClick={changeFav} fill={'#FFFFF'} stroke={'#FFFFF'} />
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={changeFav}
        >
          <path
            d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
            stroke={props.fillColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 3L13.472 7.93691L19 8.73344L15 12.5741L15.944 18L11 15.4369L6.056 18L7 12.5741L3 8.73344L8.528 7.93691L11 3Z"
            stroke={props.fillColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11 5L12.854 8.6204L17 9.20452L14 12.021L14.708 16L11 14.1204L7.292 16L8 12.021L5 9.20452L9.146 8.6204L11 5Z"
            stroke={props.fillColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="11" cy="11" r="4" fill={props.fillColor} />
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={changeFav}
        >
          <path
            d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
            stroke={props.fillColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default FavoriteButton;
