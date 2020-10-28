import React, { useState } from 'react';
import { Offline } from 'react-detect-offline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import WifiIcon from '@material-ui/icons/WifiOff';
import {
  createStyles,
  fade,
  Theme,
  makeStyles
} from '@material-ui/core/styles';
import SearchList from './SearchList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    search: {
      position: 'relative',
      borderRadius: 10,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      width: '100%',
      margin: 10
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%'
    }
  })
);

type SearchProps = {
  back: boolean; // In future, pass in returning function
}

const SearchAppBar = ({ back }: SearchProps) => {
  const classes = useStyles();
  const initialQuery = '';
  const [query, setQuery] = useState(initialQuery);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {back && <BackIcon />}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="searchie search"
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
        </Toolbar>
      </AppBar>
      <SearchList query={query} />
    </div>
  );
};

SearchAppBar.defaultProps = { back: false };

export default SearchAppBar;
