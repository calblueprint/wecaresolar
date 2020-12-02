import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../components/Troubleshoot/TroubleShootStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import TroubleShootCard from '../../components/Troubleshoot/TroubleShootCard';

function TroubleShoot({ match, classes }) {
  console.log("HELLO", match.url)

  return (
    <div className={classes.background}>
      <h1>Troubleshoot</h1>
      <TroubleShootCard helpId={"Root"} />
    </div>);
}

export default withStyles(styles)(TroubleShoot);