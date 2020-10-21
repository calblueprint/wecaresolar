import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Favorites from './pages/Favorites';
import Guides from './pages/Guides';
import Suitcase from './pages/Suitcase';
import Troubleshoot from './pages/Troubleshoot';
import TabBar from './components/TabBar'
import PlaylistCard from './components/PlaylistCard';
import { favoritedResource } from './components/PlaylistCard';



function App() {
  return (
    <Router>
      <PlaylistCard />
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
