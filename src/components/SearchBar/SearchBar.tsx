import React, { useState } from 'react';
import { Offline } from 'react-detect-offline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import WifiIcon from '@material-ui/icons/WifiOff';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import SettingsDrawer from './SettingsDrawer';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SearchList from './SearchList';

type SearchProps = {
  classes: any;
};

const SearchAppBar = (props: SearchProps) => {
  const { classes } = props;
  const history = useHistory();
  const location = useLocation();

  const [query, setQuery] = useState('');
  const [video, setVideo] = useState(false);
  const [article, setArticle] = useState(false);
  const [playlist, setPlaylist] = useState(false);

  const hideBackButton = [
    '/Guides',
    '/Troubleshoot',
    '/Favorites',
    '/Suitcase'
  ].includes(location.pathname);

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          {!hideBackButton && <BackIcon className={classes.backButton} onClick={() => history.goBack()} />}
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
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Offline>
            <WifiIcon />
          </Offline>
          <SettingsDrawer />
        </Toolbar>
      </AppBar>
      {query && (
        <SearchList
          video={video}
          article={article}
          playlist={playlist}
          query={query}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(SearchAppBar);
