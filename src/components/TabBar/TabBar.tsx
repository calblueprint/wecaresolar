import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';
import { styles } from './TabBarStyles';
import Fab from '@material-ui/core/Fab';
import { ReactComponent as TroubleshootIcon} from './../../components/TabBar/icons/troubleshoot.svg';
import { ReactComponent as FavoritesIcon} from './../../components/TabBar/icons/favorites.svg';
import { ReactComponent as ManualsIcon} from './../../components/TabBar/icons/manuals.svg';
import { ReactComponent as SettingsIcon} from './../../components/TabBar/icons/settings.svg';
import { ReactComponent as GoldSuitcaseIcon} from './../../components/TabBar/icons/suitcase.svg';
import { SvgIcon, Typography } from '@material-ui/core';

type TabProps = {
  classes: any;
};

const suitcase = {
  borderTop: "none"
};

const bar = {
  width: window.innerWidth
};

const TabBar = (props: TabProps) => {
  const width = window.innerWidth
  const { classes } = props;
  const [value, setValue] = React.useState(2);

  return (
    <div>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.navbar} //adjusting width here doesn't work either 
          // style={bar} // this doesn't work 
        >
          <BottomNavigationAction
            classes={classes}
            component={Link}
            to="/Guides"
            label="Manuals"
            icon={<SvgIcon><ManualsIcon/></SvgIcon>}
            />
          <BottomNavigationAction
            classes={classes}
            component={Link}
            to="/Favorites"
            label="Favorites"
            icon={<SvgIcon><FavoritesIcon/></SvgIcon>}
          />
          <BottomNavigationAction
            classes={classes}
            style={suitcase}
            component={Link}
            to="/Suitcase"
            icon={ 
            <Fab variant='round' className={classes.fabRoot}> 
                <div> 
                  <SvgIcon> <GoldSuitcaseIcon/> </SvgIcon>
                  <Typography variant="body1"> Suitcase </Typography> 
                </div>
            </Fab>} 
          />
          <BottomNavigationAction
            classes={classes}
            component={Link}
            to="/Troubleshoot"
            label="Troubleshoot"
            icon={<SvgIcon><TroubleshootIcon/></SvgIcon>}
          />
          <BottomNavigationAction
            classes={classes}
            component={Link}
            to="/Settings"
            label="Settings"
            icon={<SvgIcon><SettingsIcon/></SvgIcon>}
          />
        </BottomNavigation>
    </div>
  );
};

export default withStyles(styles)(TabBar);
