import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectFavoritedResources }from '../store/resourcesSlice'; 
import { ResourcesSlice } from '../store/resourcesSlice'; 
import { useDispatch } from 'react-redux'; 
import { setResourceIsFavorited } from '../store/resourcesSlice';
import FavoriteCard from './FavoriteCard'; 


function FavoriteList() {
    const favResources = useSelector(selectFavoritedResources); 

    console.log(favResources); 


  return (<div><pre>{ JSON.stringify(favResources, null, 2) }</pre>
        <div>
          {favResources.map((resource : any) => (
              <FavoriteCard id={resource.id} isFavorited={resource.isFavorited} />
          )
          )}
        </div>
  </div>) 
}; 

export default FavoriteList;