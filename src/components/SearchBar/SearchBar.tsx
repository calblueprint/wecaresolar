import React from 'react';
import { Offline } from 'react-detect-offline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import WifiIcon from '@material-ui/icons/WifiOff';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchBarStyles';
import SettingsDrawer from './SettingsDrawer'; 

type SearchProps = {
  back: boolean; // In future, pass in returning function
  classes: any;
}

const SearchAppBar = (props: SearchProps) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          {props.back && <BackIcon />}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for an article or resource"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Offline>
            <WifiIcon />
          </Offline>
          <SettingsDrawer/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SearchAppBar.defaultProps = { back: false };

export default withStyles(styles)(SearchAppBar);
