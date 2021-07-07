import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { Typography } from '@material-ui/core';

type Search = {
  classes: any;
};

const Search = (props) => {
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
