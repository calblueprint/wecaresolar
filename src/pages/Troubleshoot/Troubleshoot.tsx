import React from 'react';
import TroubleShootCard from '../../components/Troubleshoot/TroubleShootCard';

export const ROOT_ID = "(1) What's wrong?";

function TroubleShoot({ match }) {
  return (
    <div>
      <TroubleShootCard helpId={ROOT_ID} />
    </div>
  );
}

export default TroubleShoot;
