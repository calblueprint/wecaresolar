import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { Typography } from '@material-ui/core';
import SearchList from './SearchList';

interface SearchProps {
  classes: any;
  userInput: any;
}

const Search = (props: SearchProps) => {
  return <div></div>;
};

export default withStyles(styles)(Search);
