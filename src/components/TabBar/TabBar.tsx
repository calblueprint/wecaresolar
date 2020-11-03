import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import { Link } from 'react-router-dom';
import { styles } from './TabBarStyles';

type TabProps = {
  classes: any;
}

const TabBar = (props: TabProps) => {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.navbar}
    >
      <BottomNavigationAction
        component={Link}
        to="/Guides"
        label="Guides"
        icon={<DescriptionRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Suitcase"
        label="Suitcase"
        icon={<WorkRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Favorites"
        label="Favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/Troubleshoot"
        label="Troubleshoot"
        icon={<HelpRoundedIcon />}
      />
    </BottomNavigation>
  );
}

export default withStyles(styles)(TabBar);
