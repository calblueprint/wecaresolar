import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Guides from './pages/Guides';
import Suitcase from './pages/Suitcase';
import Troubleshoot from './pages/Troubleshoot';
import TabBar from './components/TabBar';
import { makeStyles } from '@material-ui/core/styles';
import PlaylistPage from './components/PlaylistPage';

const useStyles = makeStyles({
  root: {
    position: 'fixed'
  }
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/suitcase" component={Suitcase} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/guides" component={Guides} />
          <Route path={"/guides/:lessonId"}
            render={props =>
              <PlaylistPage lessonId={props.match.params.lessonId} />
            } />
          <Route path="/troubleshoot" component={Troubleshoot} />
        </Switch>
      </div>
      <TabBar />
    </Router>
  );
}

export default App;
