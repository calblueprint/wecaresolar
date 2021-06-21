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
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import RefreshButton from '../Offline/RefreshButton';
import { loadInitialState } from '../../store/loadInitialState';
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
    '/Suitcase',
    '/Settings'
  ].includes(location.pathname);

  const [active, setActive] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          {!hideBackButton && (
            <BackIcon
              className={classes.backButton}
              onClick={() => history.goBack()}
            />
          )}
          <div className={classes.search} onClick={() => setActive(true)}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search all resources"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          {active && <button onClick={() => setActive(false)}>Cancel</button>}
          <RefreshButton fetch={() => loadInitialState()} />
          <Offline>
            <WifiIcon />
          </Offline>
        </Toolbar>
      </AppBar>
      {query && <SearchList query={query} />}
    </div>
  );
};

export default withStyles(styles)(SearchAppBar);
