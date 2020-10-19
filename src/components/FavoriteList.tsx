import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectFavoritedResources }from '../store/resourcesSlice'; 
import { ResourcesSlice } from '../store/resourcesSlice'; 
import { useDispatch } from 'react-redux'; 
import { setResourceIsFavorited } from '../store/resourcesSlice';
import FavoriteCard from './FavoriteCard'; 

//filters through resources --> FavoriteCard determines what is rendered 
function FavoriteList() {
    const favResources = useSelector(selectFavoritedResources); 

    console.log(favResources) 

  return (<div><pre>{ JSON.stringify(favResources, null, 2) }</pre>
        <div>
          {Object.keys(favResources).map((resource : any) => (
            <FavoriteCard id={resource} isFavorited={favResources[resource].isFavorited} />
          )
          )}
        </div>
  </div>) 
}; 

export default FavoriteList;