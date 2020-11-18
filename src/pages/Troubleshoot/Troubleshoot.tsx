import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import TroubleShootCard from '../../components/TroubleShootCard';

function TroubleShoot() {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  const [count, setCount] = useState(0);
  return (<div>
    Troubleshoot
    <TroubleShootCard/>

  </div>);
}

export default TroubleShoot;