import React, { useState } from 'react';
import { Offline } from 'react-detect-offline';
import AppBar from '@material-ui/core/AppBar';
import Chip from '@material-ui/core/Chip';
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
      color: 'inherit',
      textOverflow: 'ellipsis'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      textOverflow: 'ellipsis',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '200%'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  })
);

type SearchProps = {
  back: boolean; // In future, pass in returning function
};

const SearchAppBar = ({ back }: SearchProps) => {
  const classes = useStyles();

  const [query, setQuery] = useState('');
  const [video, setVideo] = useState(false);
  const [article, setArticle] = useState(false);
  const [playlist, setPlaylist] = useState(false);

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
              placeholder="Look for a video or article"
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
        {query && <div className={classes.buttons}>
          <Chip
            label="Video"
            clickable
            onClick={() => setVideo(!video)}
          />
          <Chip
            label="Article"
            clickable
            onClick={() => setArticle(!article)}
          />
          <Chip
            label="Playlist"
            clickable
            onClick={() => setPlaylist(!playlist)}
          />
        </div>}

      </AppBar>
      {query && <SearchList video={video} article={article} playlist={playlist} query={query} />}
    </div>
  );
};

SearchAppBar.defaultProps = { back: false };

export default SearchAppBar;
