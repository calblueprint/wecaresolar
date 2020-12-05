import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Guides from './pages/Guides/Guides';
import Suitcase from './pages/Suitcase/Suitcase';
import Troubleshoot from './pages/Troubleshoot/Troubleshoot';
import TabBar from './components/TabBar/TabBar';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistPage from './components/Guides/PlaylistPage';
import TopicViews from './components/TopicViews';
import SearchBar from './components/SearchBar/SearchBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './CustomStyles';

const useStyles = makeStyles({
  root: {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.background.default
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Route component={SearchBar} />
          <Switch>
            <Route exact path="/suitcase" component={Suitcase} />
            <Route
              path={'/suitcase/:topicId'}
              render={(props) => (
                <TopicViews topicId={props.match.params.topicId} />
              )}
            />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/guides" component={Guides} />
            <Route
              path={'/guides/:lessonId'}
              render={(props) => (
                <PlaylistPage lessonId={props.match.params.lessonId} />
              )}
            />
            <Route path="/troubleshoot" component={Troubleshoot} />
          </Switch>
        </div>
        <TabBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
