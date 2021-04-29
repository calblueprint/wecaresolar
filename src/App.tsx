import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Guides from './pages/Guides/Guides';
import Suitcase from './pages/Suitcase/Suitcase';
import Troubleshoot from './pages/Troubleshoot/Troubleshoot';
import Settings from './pages/Settings/Settings';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistPage from './components/Guides/PlaylistPage';
import TopicViews from './components/Topics/TopicViews';
import Video from './components/Video/Video';
import TroubleShootCard from './components/Troubleshoot/TroubleShootCard';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './CustomStyles';
import SeeAll from './components/SeeAll';

import Article from './components/Article/Article';
import WCSRoute from './WCSRoute';

const useStyles = makeStyles({
  root: {
    color: theme.palette.black.main,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll'
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
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
              path={'/Guides/Articles/:articleId'}
              render={(props) => (
                <Article resId={props.match.params.articleId} />
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
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
