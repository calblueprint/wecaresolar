import React from 'react';
import { useSelector } from 'react-redux';
import Video from '../components/Video'
import { isVideo } from '../store/resourcesSlice'

import { RootState } from '../store/reducers';

function Guides() {
  const resources = useSelector((state: RootState) => state.resources);

  function playvideo() {
    let resource = resources[17]
    if (isVideo(resource.data)) {
      return <Video resId={17} videoDetails={resource} videoData={resource.data} />
    }
  }
  return (
    <div>
      {playvideo()}
    </div>
  );
}

export default Guides;
