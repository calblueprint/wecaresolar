import React from 'react';
import { useSelector } from 'react-redux'; 
import { RootState } from '../store/reducers';
import { setResourceIsFinished } from '../store/resourcesSlice';
import { selectFavoritedResources }from '../store/resourcesSlice'; 
import { ResourcesSlice } from '../store/resourcesSlice'; 

interface FavoriteProps {
  list: ResourcesSlice; 
}

function Favorites(props : FavoriteProps) {
  return <div>list</div>
}

function Favoriting() {
    const favResources = useSelector(selectFavoritedResources); 
  return (<div> <Favorites list={favResources}/>
  console.log({favResources})</div>)
}


export default Favoriting;