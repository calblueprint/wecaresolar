import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Guides from './pages/Guides/Guides';
import Suitcase from './pages/Suitcase/Suitcase';
import Troubleshoot from './pages/Troubleshoot/Troubleshoot';
import Settings from './pages/Settings/Settings';
import TabBar from './components/TabBar/TabBar';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistPage from './components/Guides/PlaylistPage';
import TopicViews from './components/Topics/TopicViews';
import SearchBar from './components/SearchBar/SearchBar';
import Video from './components/Video/Video';
import TroubleShootCard from './components/Troubleshoot/TroubleShootCard';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './CustomStyles';
import SeeAll from './components/SeeAll';

const useStyles = makeStyles({
  root: {
    color: theme.palette.brown.main,
    backgroundColor: theme.palette.background.default
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div
          className={classes.root}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div>
            <Route component={SearchBar} />
          </div>
          <div>
            <Switch>

              <Route exact path="/">
                <Redirect to="/Guides" />
              </Route>

              <Route exact path="/Guides" component={Guides} />
              <Route exact path="/Guides/:type" render={(props) => (
                <SeeAll match={props.match} typeofres={props.match.params.type} />
              )} />
              <Route
                path={'/Guides/Playlists/:lessonId'}
                render={(props) => (
                  <PlaylistPage lessonId={props.match.params.lessonId} />
                )}
              />
              <Route
                path={'/Guides/Articles/:lessonId'}
                render={(props) => (
                  <PlaylistPage lessonId={props.match.params.lessonId} />
                )}
              />
              <Route
                path={'/Guides/Videos/:videoId'}
                render={(props) => (
                  <Video resId={props.match.params.videoId} />
                )}
              />

              <Route exact path="/favorites" component={Favorites} />

              <Route exact path="/suitcase" component={Suitcase} />
              <Route
                path={'/suitcase/:topicId'}
                render={(props) => (
                  <TopicViews topicId={props.match.params.topicId} />
                )}
              />

              <Route exact path="/troubleshoot" component={Troubleshoot} />
              <Route
                path={'/Troubleshoot/:helpId'}
                render={(props) => (
                  <TroubleShootCard helpId={props.match.params.helpId} />
                )}
              />

              <Route exact path="/settings" component={Settings} />

            </Switch>
          </div>
          <div>
            <TabBar />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
