import React from 'react';
import Fuse from 'fuse.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { useSelector } from 'react-redux';
import { Resource } from '../../store/resourcesSlice';
import StandardCard from '../Cards/StandardCard';
import { RootState } from '../../store/reducers';

function SearchList(props) {
  const { classes } = props;
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
  const results = fuse.search(props.query);

  return (
    <div className={classes.searchList}>
      <h1>Search Results</h1>
      {results.length <= 0 && <div>No Results Found</div>}
      {results.length > 0 &&
        results.map((resource: any) => {
          return (
            <StandardCard
              resource={resource.item}
              resourceID={resource.item.id}
              completeCheck={false}
              collapsed={false}
            />
          );
        })}
    </div>
  );
}

export default withStyles(styles)(SearchList);
