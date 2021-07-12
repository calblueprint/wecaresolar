import React, { useEffect, useState } from 'react';
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
import ClearIcon from '@material-ui/icons/Clear';

type SearchProps = {
  classes: any;
};

const SearchAppBar = (props: SearchProps) => {
  const { classes } = props;
  const history = useHistory();
  const location = useLocation(); //use to access search query
  const query = new URLSearchParams(location.search).get('name');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const hideBackButton = [
    '/Guides',
    '/Troubleshoot',
    '/Favorites',
    '/Suitcase',
    '/Settings'
  ].includes(location.pathname);

  const handleBack = (e) => {
    history.goBack();
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e) => {
    history.push('/search');
  };

  //want to filter within search; video/article will pass into SearchList as props for filtering (implement later)
  const searchResults = (sq) => {
    if (location.pathname.includes('search')) {
      return <SearchList query={sq} />;
    }
  };

  //while user is typing, update url parameters
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) {
      params.append('name', searchQuery);
    } else {
      params.delete('name');
    }
    history.replace({ pathname: 'search', search: params.toString() });
  }, [searchQuery, history]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          {!hideBackButton && (
            <BackIcon className={classes.backButton} onClick={handleBack} />
          )}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div>
              <InputBase
                value={searchQuery}
                placeholder="Search all resources"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                onClick={handleClick}
              />
            </div>
            {searchQuery !== '' ? (
              <div className={classes.clearButton}>
                <ClearIcon
                  className={classes.clearIcon}
                  onClick={() => setSearchQuery('')}
                />
              </div>
            ) : null}
          </div>
          <RefreshButton fetch={() => loadInitialState()} />
          <Offline>
            <WifiIcon />
          </Offline>
        </Toolbar>
      </AppBar>
      {searchResults(searchQuery)}
    </div>
  );
};

export default withStyles(styles)(SearchAppBar);
