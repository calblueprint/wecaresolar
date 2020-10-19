import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectFavoritedResources }from '../store/resourcesSlice'; 
import { ResourcesSlice } from '../store/resourcesSlice'; 
import { useDispatch } from 'react-redux'; 
import { setResourceIsFavorited } from '../store/resourcesSlice';

//package component's action + rendering 
//object interacting with itself 

interface FavoriteButtonProps {
  id: number; 
  isFavorited: boolean; 
}

//resource card rendering a favorite component inside of it 
function FavoriteButton(props : FavoriteButtonProps) {
    const myAction = setResourceIsFavorited({
        id: props.id,
        isFavorited: !props.isFavorited,
    })
    const dispatch = useDispatch();

    //what is () doing? 
  return (<div><button onClick={() => dispatch(myAction)}></button></div>) 
}; 

export default FavoriteButton;