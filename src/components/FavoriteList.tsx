import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCard from './PreviewCard';
import { RootState } from '../store/reducers';

function FavoriteList() {
  const favResources = useSelector((state: RootState) => state.resources);

  return (
    <div>
      {Object.keys(favResources).map((resource: any) => (
        <PreviewCard resource={favResources[resource]} resourceID={resource} />
      ))}
    </div>
  );
}

export default FavoriteList;
