import React from 'react';
import { Route } from 'react-router-dom';
import TabBar from './components/TabBar/TabBar';
import SearchBar from './components/SearchBar/SearchBar';

function WCSRoute({ hasSearch, hasTab, ...rest }) {
  return (
    <div>
      {hasSearch ? <SearchBar /> : null}
      <div style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <Route {...rest} />
      </div>
      {hasTab ? <TabBar /> : null}
    </div>);
};

export default WCSRoute;
