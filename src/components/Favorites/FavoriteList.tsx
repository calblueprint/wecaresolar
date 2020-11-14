import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCard from '../Cards/PreviewCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';

function FavoriteList() {
  const favResources = useSelector(selectFavoritedResources);
  return (
    <div>
      {Object.keys(favResources).map((resource: any) => (
        <PreviewCard key={resource} resource={favResources[resource]} resourceID={resource} />
      ))}
    </div>
  );
}

export default FavoriteList;
