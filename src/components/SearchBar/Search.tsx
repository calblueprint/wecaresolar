import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { Typography } from '@material-ui/core';
import SearchList from './SearchList';

interface SearchProps {
  classes: any;
  userInput: any;
}

// 1. render SearchList here based on query input prop

const Search = (props: SearchProps) => {
  return (
    <div>
      <Typography variant="body1">
        {' '}
        Whoops! You did not search anything!{' '}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Search);

// {query ? <SearchList query={query} /> : null}
