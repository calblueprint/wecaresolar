import React from 'react';
import Fuse from 'fuse.js';
import { useSelector } from 'react-redux';
import { Resource } from '../../store/resourcesSlice';
import PreviewCard from '../PreviewCard';
import { RootState } from '../../store/reducers';


function SearchList(props) {
  const options = {
    keys: ['title']
  }
  let resources = useSelector((state: RootState) => {
    return Object.keys(state.resources).map<Resource>((r: string) => state.resources[r]);
  });
  if (props.video) {
    resources = resources.filter((r) => r.type == 'Video');
  }
  if (props.article) {
    resources = resources.filter((r) => r.type == 'Article');
  }
  const fuse = new Fuse(resources, options);
  const results = fuse.search(props.query);
  return (
    <div>
      {results.map((resource: any) => {
        return <PreviewCard resource={resource.item} resourceID={resource.item.id} /> 
      })}
    </div>
  );
}

export default SearchList;
