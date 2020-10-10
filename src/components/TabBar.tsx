import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';


const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  
  function TabBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <div className="nav-container">
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Guides" icon={<DescriptionRoundedIcon/>} />
        <BottomNavigationAction label="Suitcase" icon={<WorkRoundedIcon/>} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Troubleshoot" icon={<HelpRoundedIcon />} />

      </BottomNavigation>
      </div>
    );
  }
  
  export default TabBar;