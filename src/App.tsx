import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Guides from './pages/Guides';
import Suitcase from './pages/Suitcase';
import Troubleshoot from './pages/Troubleshoot';
import TabBar from './components/TabBar';
import { makeStyles } from '@material-ui/core/styles';

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
          <Route path="/suitcase">
            <Suitcase />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/guides">
            <Guides />
          </Route>
          <Route path="/troubleshoot">
            <Troubleshoot />
          </Route>
        </Switch>
      </div>
      <TabBar />
    </Router>
  );
}

export default App;
