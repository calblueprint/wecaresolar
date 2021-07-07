import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { useSelector } from 'react-redux';
import { Resource } from '../../store/resourcesSlice';
import ResourceCard from '../Cards/ResourceCard';
import { RootState } from '../../store/reducers';
import { useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function SearchList(props) {
  const { classes } = props;
  //set up query

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  //pull resources from Redux using Fuse
  const options = {
    keys: ['title']
  };
  let resources = useSelector((state: RootState) => {
    return Object.keys(state.resources).map<Resource>(
      (r: string) => state.resources[r]
    );
  });
  if (props.video) {
    resources = resources.filter((r) => r.type == 'Video');
  }
  if (props.article) {
    resources = resources.filter((r) => r.type == 'Article');
  }
  const fuse = new Fuse(resources, options);
  const filteredResults = fuse.search(props.query);

  return (
    <div className={classes.searchList}>
      <Typography variant="h1"> Search Results </Typography>
      {filteredResults.length <= 0 && <div>No Results Found</div>}
      {filteredResults.length > 0 &&
        filteredResults.map((resource: any) => {
          return (
            <ResourceCard
              resource={resource.item}
              resourceID={resource.item.title}
              expand={true}
              includeCheck={true}
            />
          );
        })}
    </div>
  );
}

export default withStyles(styles)(SearchList);
