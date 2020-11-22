import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import FavoriteButton from '../Favorites/FavoriteButton';
import Label from '../Label'
import { get } from 'idb-keyval';
import { videoStore, platform } from '../../index'
import { Resource, VideoData, isVideo } from '../../store/resourcesSlice'
import ReactPlayer from 'react-player'
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoStyles';
import { getId, arrayBufferToBlob } from './VideoFunctions'
import { useDispatch } from 'react-redux';
import { setResourceIsCached } from '../../store/resourcesSlice';

type VideoProps = {
  resId: number,
  videoDetails: Resource,
  videoData: VideoData
  classes: any;
}

const Video = ({ resId, videoDetails, videoData, classes }: VideoProps) => {
  const dispatch = useDispatch();

  const [videoUrl, setVideoUrl] = useState(
    videoData.watchUrl
  );

  useEffect(() => { refreshVideoUrl() },
    [videoDetails.isCached],
  );

  function createDownloadButton() {
    if (isVideo(videoDetails.data)) {
      if (!videoDetails.isCached) {
        return <DownloadButton id={resId} videoData={videoDetails.data} />
      } else {
        return <p>Already Downloaded</p>;
      }
    }
  }

  function refreshVideoUrl() {
    if (isVideo(videoDetails.data)) {
      if (videoDetails.isCached) {
        get(resId, videoStore).then(videoBlob => {
          if (videoBlob !== undefined) {
            if (platform != "Android") {
              videoBlob = arrayBufferToBlob(videoBlob, "video/mp4")
            }
            setVideoUrl(URL.createObjectURL(videoBlob))
          } else {
            console.log("Error in loading cached video - missing video entry");
            dispatch(setResourceIsCached({
              id: resId,
              isCached: false,
            }));
          }
        }).catch((error) => console.log("Failed to download the video." +
          "Please make sure that you are not in private browsing mode, and that you have enough space in your video storage"))
      } else {
        setVideoUrl("//www.youtube.com/embed/" + getId(videoDetails.data.watchUrl))
      }
    }
  }

  return (
    <div className={classes.thing}>
      <div className={classes.labelList}>
        {videoDetails.tags.map(tag => <Label title={tag} />)}
      </div>
      <div>
        <h1>{videoDetails.title}</h1>
        <FavoriteButton id={resId} isFavorited={videoDetails.isFavorited} />
      </div>
      <ReactPlayer url={videoUrl} playing controls />
      <div>
        {createDownloadButton()}
      </div>
      <h2> temporary padding </h2>
    </div>
  )
}

export default withStyles(styles)(Video);