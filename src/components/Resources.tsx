import React from 'react';
import TabBar from './TabBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});


function Resources() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="nav-container">
      <TabBar></TabBar> 
    </div>
  );
}

export default Resources;