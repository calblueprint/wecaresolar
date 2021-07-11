import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { useSelector } from 'react-redux';
import { Resource } from '../../store/resourcesSlice';
import ResourceCard from '../Cards/ResourceCard';
import { RootState } from '../../store/reducers';
import { Typography } from '@material-ui/core';

interface SearchListProps {
  classes: any;
  query: string;
}

function SearchList(props: SearchListProps) {
  const { classes, query } = props;

  //pull resources from Redux using Fuse
  const options = {
    keys: ['title']
  };

  const search = (query) => {
    const resources = useSelector((state: RootState) => {
      return Object.keys(state.resources).map<Resource>(
        (r: string) => state.resources[r]
      );
    });
    const fuse = new Fuse(resources, options);
    if (!query) {
      return [];
    }
    return fuse.search(query);
  };
  const searchResults = search(query);

  return (
    <div className={classes.searchList}>
      <Typography variant="h1"> Search Results </Typography>
      {searchResults.length == 0 ? <div> No Results Found</div> : null}

      {searchResults.map((resource: any) => {
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
