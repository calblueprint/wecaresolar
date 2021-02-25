import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import favorites from './../../components/TabBar/icons/favorites.png';
import manuals from './../../components/TabBar/icons/manuals.png';
import settings from './../../components/TabBar/icons/settings.png';
import suitcase from './../../components/TabBar/icons/suitcase.png';
import troubleshoot from './../../components/TabBar/icons/troubleshoot.png';
import { Link } from 'react-router-dom';
import { styles } from './TabBarStyles';

type TabProps = {
  classes: any;
};

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
        label="Manuals"
        icon={<img src={manuals} />}
        className={classes.text}
      />
      <BottomNavigationAction
        component={Link}
        to="/Favorites"
        label="Favorites"
        icon={<img src={favorites} />}
        className={classes.text}
      />
      <BottomNavigationAction
        component={Link}
        to="/Suitcase"
        label="Suitcase"
        icon={<img src={suitcase} />}
        className={classes.text}
      />
      <BottomNavigationAction
        component={Link}
        to="/Troubleshoot"
        label="Troubleshoot"
        icon={<img src={troubleshoot} />}
        className={classes.text}
      />
      <BottomNavigationAction
        component={Link}
        to="/Settings"
        label="Settings"
        icon={<img src={settings} />}
        className={classes.text}
      />
    </BottomNavigation>
  );
};

export default withStyles(styles)(TabBar);
