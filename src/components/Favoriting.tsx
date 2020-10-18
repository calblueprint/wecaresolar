import React from 'react';
import { useSelector } from 'react-redux'; 
import { RootState } from '../store/reducers';
import Favorites from './Favorites'; 
import { setResourceIsFinished } from '../store/resourcesSlice';
import { selectFavoritedResources }from '../store/resourcesSlice'; 

function Favoriting() {
    const favResources = useSelector(selectFavoritedResources); 

  //how do I make favResources a Selector type? 
  return (<div> <Favorites list={favResources}> </Favorites> </div>)
}


export default Favoriting;