import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritedResources } from '../store/resourcesSlice';
import FavoriteCard from './FavoriteCard';
import { RootState } from '../store/reducers';

function FavoriteList() {
  const favResources = useSelector((state: RootState) => state.resources);
  return (
    <div>
      {Object.keys(favResources).map((resource: any) => (
        <FavoriteCard
          id={resource}
          isFavorited={favResources[resource].isFavorited}
        />
      ))}
    </div>
  );
}

export default FavoriteList;
