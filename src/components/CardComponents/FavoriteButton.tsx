import React from 'react';
<<<<<<< HEAD
import { withStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as FilledBookmark} from './filledBookmark.svg';
import { ReactComponent as UnfilledBookmark} from './unfilledBookmark.svg';
=======
import { useDispatch } from 'react-redux';
import { setResourceIsFavorited } from '../../store/resourcesSlice';
>>>>>>> 539072eaca8761d78aa80866cccec384cc1decc2

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
<<<<<<< HEAD
        <SvgIcon viewBox='0 0 18 18' onClick={changeFav}>
          <FilledBookmark />
        </SvgIcon>
      ) : (
        <SvgIcon viewBox='0 0 18 18' onClick={changeFav}>
          <UnfilledBookmark />
        </SvgIcon>
=======
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={changeFav}
        >
          <path
            d="M14.25 15.75L9 12L3.75 15.75V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H12.75C13.1478 2.25 13.5294 2.40804 13.8107 2.68934C14.092 2.97064 14.25 3.35218 14.25 3.75V15.75Z"
            stroke="#020202"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.0001 12.195L3.6001 15.84V2.88H14.4001V15.84L9.0001 12.195Z"
            fill="#020202"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={changeFav}
        >
          <path
            d="M14.25 15.75L9 12L3.75 15.75V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H12.75C13.1478 2.25 13.5294 2.40804 13.8107 2.68934C14.092 2.97064 14.25 3.35218 14.25 3.75V15.75Z"
            stroke="#020202"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
>>>>>>> 539072eaca8761d78aa80866cccec384cc1decc2
      )}
    </div>
  );
}

export default FavoriteButton;
