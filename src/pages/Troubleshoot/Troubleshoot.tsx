import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import TroubleShootCard from '../../components/TroubleShootCard';

function TroubleShoot({ match }) {
  console.log("HELLO", match.url)

  return (<div>
    Troubleshoot
    <TroubleShootCard helpId={"404_ERROR"} />
  </div>);
}

export default TroubleShoot;