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
import { Link, useHistory, useParams } from 'react-router-dom';
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
  const location = useLocation(); //use for parsing query string

  console.log(history.location);

  const { search } = useLocation();
  const query = new URLSearchParams(search).get('name');

  console.log('query', query);

  //onclick - update url with query

  const [searchQuery, setSearchQuery] = useState(query || ''); //query will be done through react router, not react state

  console.log('searchQuery', searchQuery);

  const [video, setVideo] = useState(false);
  const [article, setArticle] = useState(false);
  const [playlist, setPlaylist] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const hideBackButton = [
    '/Guides',
    '/Troubleshoot',
    '/Favorites',
    '/Suitcase',
    '/Settings'
  ].includes(location.pathname);

  console.log('location pathname', location.pathname);
  // console.log('HISTORY', history);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) {
      params.append('name', searchQuery);
    } else {
      params.delete('name');
    }
    history.replace({ pathname: 'search', search: params.toString() });
  }, [searchQuery, history]);

  //want to filter within search; video/article will pass into SearchList as props for filtering (implement later)

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Toolbar>
          {!hideBackButton && (
            <BackIcon
              className={classes.backButton}
              onClick={() => {
                history.goBack();
              }}
            />
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
                onClick={() => history.push('/search')}
                name="s"
              />
              {/* {active ? (
                  <button type="submit" onClick={() => setActive(false)}>
                    Search
                  </button>
                ) : null} */}
            </div>
          </div>
          <RefreshButton fetch={() => loadInitialState()} />
          <Offline>
            <WifiIcon />
          </Offline>
        </Toolbar>
      </AppBar>
      {location.pathname.includes('search') ? (
        <SearchList query={searchQuery} />
      ) : null}
    </div>
  );
};

export default withStyles(styles)(SearchAppBar);
