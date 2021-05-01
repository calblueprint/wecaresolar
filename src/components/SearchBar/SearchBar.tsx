import React, { useState } from 'react';
import { Offline } from 'react-detect-offline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import WifiIcon from '@material-ui/icons/WifiOff';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { useHistory, useLocation, Link } from 'react-router-dom';
import RefreshButton from '../RefreshButton';
import { loadInitialState } from '../../store/loadInitialState';
import SearchList from './SearchList';
import { Button } from '@material-ui/core';

type SearchProps = {
  classes: any;
};

const SearchAppBar = (props: SearchProps) => {
  const { classes } = props;
  const history = useHistory();
  const location = useLocation();

  const [query, setQuery] = useState('');

  const hideBackButton = [
    '/Guides',
    '/Troubleshoot',
    '/Favorites',
    '/Suitcase'
  ].includes(location.pathname);

  const [idle, setIdle] = useState(true);

  // function handleSearch();

  return (
    <div className={classes.root}>
      {!idle ? (
        <div
          className={classes.overlayBackground}
          onClick={() => {
            setIdle(true);
          }}
        />
      ) : null}
      <AppBar className={classes.bar}>
        <Toolbar>
          {!hideBackButton && (
            <BackIcon
              className={classes.backButton}
              onClick={() => history.goBack()}
            />
          )}
          <div
            className={classes.search}
            onClick={(event) => {
              setIdle(false);
            }}
          >
            {/* <form
              action={`/search/`}
              method={'get'}
              className={classes.search}
              // onSubmit={handleSearch}
            >
              <input
                className={classes.search}
                placeholder="Search all resources"
                type="search"
                // classes={{
                //   root: classes.inputRoot,
                //   input: classes.inputInput
                // }}
                // inputProps={{ 'aria-label': 'search' }}
                onChange={(event) => setQuery(event.target.value)}
              ></input>
              <button className={classes.searchButton}>
                <SearchIcon className={classes.searchIconWrapped} />
              </button>
            </form> */}

            <InputBase
              placeholder="Search all resources"
              type="search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => setQuery(event.target.value)}
            />
            {idle ? (
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            ) : (
              <button
                className={classes.searchButton}
                // onClick={handleSearch}
                // to={{ pathname: '/favorites' }}
              >
                <SearchIcon className={classes.searchIconWrapped} />
              </button>
            )}
          </div>
          <RefreshButton fetch={() => loadInitialState()} />
          <Offline>
            <WifiIcon />
          </Offline>
        </Toolbar>
      </AppBar>

      {query && (
        <SearchList
          // video={video}
          // article={article}
          // playlist={playlist}
          query={query}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(SearchAppBar);
