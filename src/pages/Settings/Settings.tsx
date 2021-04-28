import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './SettingsStyles';

function Settings({ match, classes }) {
  return (
    <div className={classes.container}>
      <Typography variant="h1">Settings</Typography>
    </div>
  );
}

export default withStyles(styles)(Settings);
