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
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'

type SearchProps = {
  classes: any;
}

const SearchAppBar = (props: SearchProps) => {
  const { classes } = props;
  const history = useHistory(); 
  const location = useLocation();


  const hideBackButton = ["/Guides", "/Troubleshooting", "/Favorites", "/Suitcase"].includes(location.pathname); 

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          {!hideBackButton && <BackIcon onClick={() => history.go(-1)} />}
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(SearchAppBar);