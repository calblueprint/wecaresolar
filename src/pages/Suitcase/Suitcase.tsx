import React, { Component } from 'react';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimiation';
import SearchBar from '../../components/SearchBar/SearchBar';
import TabBar from '../../components/TabBar/TabBar';

function Suitcase({ match }) {

  return (
    <div>
      <SearchBar />
      <div>
        <SuitcaseAnimation match={match} />
      </div>
      <TabBar />

    </div>
  );
}

export default Suitcase; 
