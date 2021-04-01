import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import goldsuitcase from './../../components/TabBar/icons/goldsuitcase.svg';
import { Link } from 'react-router-dom';
import { styles } from './TabBarStyles';
import Fab from '@material-ui/core/Fab';
import { ReactComponent as TroubleshootIcon} from './../../components/TabBar/icons/troubleshoot.svg';
import { ReactComponent as FavoritesIcon} from './../../components/TabBar/icons/favorites.svg';
import { ReactComponent as ManualsIcon} from './../../components/TabBar/icons/manuals.svg';
import { ReactComponent as SettingsIcon} from './../../components/TabBar/icons/settings.svg';
import { ReactComponent as GoldSuitcaseIcon} from './../../components/TabBar/icons/goldsuitcase.svg';
import { SvgIcon } from '@material-ui/core';

type TabProps = {
  classes: any;
};


const TabBar = (props: TabProps) => {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Link to="/Suitcase">
        <div style={{display:"flex", width:"100%", justifyContent:"center",}}>
            <Fab variant='round' className={classes.suitcase}>
              <div>
                <SvgIcon className={classes.goldsuitcase}><GoldSuitcaseIcon/></SvgIcon>
                <p className={classes.buttontext}>Suitcase</p>
              </div>
          </Fab>
        </div>
      </Link>
      <div>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.navbar}
        >
          <BottomNavigationAction
            classes={classes}
            className={classes.text}
            component={Link}
            to="/Guides"
            label="Manuals"
            icon={<SvgIcon className={classes.icons}><ManualsIcon/></SvgIcon>}
          />
          <BottomNavigationAction
            classes={classes}
            className={classes.text}
            component={Link}
            to="/Favorites"
            label="Favorites"
            icon={<SvgIcon className={classes.icons}><FavoritesIcon/></SvgIcon>}
          />
          <BottomNavigationAction
            component={Link}
            to="/Suitcase"
          />
          <BottomNavigationAction
            classes={classes}
            className={classes.text}
            component={Link}
            to="/Troubleshoot"
            label="Troubleshoot"
            icon={<SvgIcon className={classes.icons}><TroubleshootIcon/></SvgIcon>}
          />
          <BottomNavigationAction
            classes={classes}
            className={classes.text}
            component={Link}
            to="/Settings"
            label="Settings"
            icon={<SvgIcon className={classes.icons}><SettingsIcon/></SvgIcon>}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default withStyles(styles)(TabBar);
