import React from 'react';
import { useSelector } from 'react-redux';
import Video from '../components/Video'
import { RootState } from '../store/reducers';

function Guides() {
  const resources = useSelector((state: RootState) => state.resources);

  return (
    <div>
      <Video resId={17} videoDetails={resources[17]} />
    </div>
  );
}

export default Guides;
