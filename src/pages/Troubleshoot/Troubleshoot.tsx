import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import TroubleShootCard from '../../components/Troubleshoot/TroubleShootCard';

function TroubleShoot({ match }) {
  console.log("HELLO", match.url)

  return (
    <div>
      <h1>placeholder padding</h1>
      <h1>Troubleshoot</h1>
      <TroubleShootCard helpId={"404_ERROR"} />
    </div>);
}

export default TroubleShoot;