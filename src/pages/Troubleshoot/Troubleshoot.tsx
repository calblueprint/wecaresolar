import React from 'react';
import TroubleShootCard from '../../components/Troubleshoot/TroubleShootCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import TabBar from '../../components/TabBar/TabBar';

function TroubleShoot({ match }) {
  return (
    <div>
      <SearchBar />

      <h1>Troubleshoot</h1>
      <TroubleShootCard helpId={"Root"} />
      <TabBar />

    </div>
  );
}

export default TroubleShoot;
