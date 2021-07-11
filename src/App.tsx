import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import Favorites from './pages/Favorites/Favorites';
import Guides from './pages/Guides/Guides';
import Suitcase from './pages/Suitcase/Suitcase';
import Troubleshoot from './pages/Troubleshoot/Troubleshoot';
import Settings from './pages/Settings/Settings';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistPage from './components/Playlist/PlaylistPage';
import TopicViews from './components/Topics/TopicViews';
import Video from './components/Video/Video';
import TroubleShootCard from './components/Troubleshoot/TroubleShootCard';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './CustomStyles';
import SeeAll from './components/SeeAll';
import ScrollToTop from './ScrollToTop';
import WCSRoute from './WCSRoute';
import Instructions from './components/Instructions/Instructions';
import SearchList from './components/SearchBar/SearchList';

const useStyles = makeStyles({
  root: {
    color: theme.palette.black.main,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column'
  }
});

function App() {
  const classes = useStyles();
  const didInitialLoad = useSelector(
    (state: RootState) => state.metadata.didInitialLoad
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <div className={classes.root}>
          {!didInitialLoad ? (
            <div>Loading...</div>
          ) : (
            <Switch>
              <WCSRoute hasSearch hasTab exact path="/">
                <Redirect to="/Guides" />
              </WCSRoute>

              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/guides"
                component={Guides}
              />
              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/Guides/:type"
                render={(props) => (
                  <SeeAll
                    match={props.match}
                    typeofres={props.match.params.type}
                  />
                )}
              />
              <WCSRoute
                hasSearch
                hasTab
                path={'/Guides/Playlists/:lessonId'}
                render={(props) => (
                  <PlaylistPage lessonId={props.match.params.lessonId} />
                )}
              />
              <WCSRoute
                hasSearch
                hasTab
                path={'/Guides/Instructions/:articleId'}
                render={(props) => (
                  <Instructions resId={props.match.params.articleId} />
                )}
              />
              <WCSRoute
                hasSearch
                hasTab
                path={'/Guides/Videos/:videoId'}
                render={(props) => <Video resId={props.match.params.videoId} />}
              />

              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/favorites"
                component={Favorites}
              />

              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/suitcase"
                component={Suitcase}
              />
              <WCSRoute
                hasSearch
                hasTab
                path={'/suitcase/:topicId'}
                render={(props) => (
                  <TopicViews topicId={props.match.params.topicId} />
                )}
              />

              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/troubleshoot"
                component={Troubleshoot}
              />
              <WCSRoute
                hasSearch
                hasTab
                path={'/Troubleshoot/:helpId'}
                render={(props) => (
                  <TroubleShootCard helpId={props.match.params.helpId} />
                )}
              />

              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/settings"
                component={Settings}
              />

              <WCSRoute
                hasSearch
                hasTab
                exact
                path="/search"
                // component={SearchList}; rendering component will render SearchList content twice 
              />
            </Switch>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
