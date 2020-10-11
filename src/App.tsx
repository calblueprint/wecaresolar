import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Favorites from './pages/Favorites';
import Guides from './pages/Guides';
import Suitcase from './pages/Suitcase';
import Troubleshoot from './pages/Troubleshoot';


function App() {
  return (
    <Router>
      <div>
        <Link to="/suitcase">
          <button type="button">
            Suitcase
          </button>
        </Link>
        <Link to="/favorites">
          <button type="button">
            Favorites
          </button>
        </Link>
        <Link to="/guides">
          <button type="button">
            Guides
          </button>
        </Link>
        <Link to="/troubleshoot">
          <button type="button">
            Troubleshoot
          </button>
        </Link>

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
    </Router>
  );
}

export default App;
