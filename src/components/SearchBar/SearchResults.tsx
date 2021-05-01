import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './SearchStyles';
import SearchList from './SearchList';

function SearchResults({ classes }) {
  return (
    <div>
      {/* {query && (
        <SearchList
          query={query}
        />
      )} */}
    </div>
  );
}

export default withStyles(styles)(SearchResults);
