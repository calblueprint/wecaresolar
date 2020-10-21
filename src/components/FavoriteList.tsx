import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectFavoritedResources }from '../store/resourcesSlice'; 
import FavoriteCard from './FavoriteCard'; 
import { RootState } from '../store/reducers'; 

//filters through resources --> FavoriteCard determines what is rendered 
function FavoriteList() {
  const favResources = useSelector((state: RootState) => state.resources);
  // const favResources = useSelector(selectFavoritedResources); 

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

//is favResources not a JSON object? It seems like a ResourcesSlice type. 
//do we call Object.keys to make it into JSON? 