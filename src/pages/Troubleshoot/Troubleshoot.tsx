import React from 'react';
import TroubleShootCard from '../../components/Troubleshoot/TroubleShootCard';

function TroubleShoot({ match }) {
  return (
    <div>
      <h1>Troubleshoot</h1>
      <TroubleShootCard helpId={"Root"} />
    </div>
  );
}

export default TroubleShoot;
