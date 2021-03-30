import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import favorites from './../../components/TabBar/icons/favorites.svg';
import manuals from './../../components/TabBar/icons/manuals.svg';
import settings from './../../components/TabBar/icons/settings.svg';
import goldsuitcase from './../../components/TabBar/icons/goldsuitcase.svg';
import troubleshoot from './../../components/TabBar/icons/troubleshoot.svg';
import { Link } from 'react-router-dom';
import { styles } from './TabBarStyles';
import Fab from '@material-ui/core/Fab';
import { ReactComponent as Troubleshooticon} from './../../components/TabBar/icons/troubleshoot.svg';
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
              <div>
                <img src={goldsuitcase} />
              </div>
              <div className={classes.buttontext}>
                Suitcase
              </div>
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
            icon={<img src={manuals} className={classes.img}/>}
          />
          <BottomNavigationAction
            classes={classes}

            className={classes.text}
            component={Link}
            to="/Favorites"
            label="Favorites"
            icon={<img src={favorites} className={classes.img}/>}
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
            /*icon={<img src={troubleshoot} className={classes.img}/>}*/
            icon={<SvgIcon><Troubleshooticon/></SvgIcon>}
          />
          <BottomNavigationAction
            classes={classes}
            className={classes.text}
            component={Link}
            to="/Settings"
            label="Settings"
            icon={<img src={settings} className={classes.img}/>}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default withStyles(styles)(TabBar);
