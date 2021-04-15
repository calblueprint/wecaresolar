import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import TabBar from './components/TabBar/TabBar';
import SearchBar from './components/SearchBar/SearchBar';

function WCSRoute({ hasSearch, hasTab, ...rest }) {
  return (
    <div>
      {hasSearch ? <SearchBar /> : null}
      <div style={{ marginTop: '90px', marginBottom: '10vh', margin: '16px' }}>
        <Route {...rest} />
      </div>
      {hasTab ? <TabBar /> : null}
    </div>);
};

export default WCSRoute;
