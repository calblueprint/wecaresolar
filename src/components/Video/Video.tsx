import React, { useState, useEffect } from 'react';
import DownloadButton from '../DownloadButton';
import FavoriteButton from '../Favorites/FavoriteButton';
import Label from '../Label'
import { get } from 'idb-keyval';
import { videoStore } from '../../index'
import { Resource, VideoData, isVideo } from '../../store/resourcesSlice'
import ReactPlayer from 'react-player'
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoStyles';
import { getId, arrayBufferToBlob } from './VideoFunctions'

type VideoProps = {
  resId: string,
  videoDetails: Resource,
  videoData: VideoData
  classes: any;

}

const Video = ({ resId, videoDetails, videoData, classes }: VideoProps) => {

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
          console.log(videoBlob)
          if (videoBlob !== undefined) {
            setVideoUrl(URL.createObjectURL(arrayBufferToBlob(videoBlob, "video/mp4")))

          }
        }).catch((error) => console.log(error))
      } else {
        setVideoUrl("//www.youtube.com/embed/" + getId(videoDetails.data.watchUrl))
      }
    }
  }

  return (
    <div className={classes.thing}>
      <h1>Insert Title</h1>
      <div className={classes.labelList}>
        {videoDetails.tags.map(tag => <Label title={tag} />)}
      </div>
      <ReactPlayer url={videoUrl} playing controls />
      <div>
        <FavoriteButton id={resId} isFavorited={videoDetails.isFavorited} />
        {createDownloadButton()}
      </div>
      <h2> HLLELOO</h2>
    </div>
  )
}

export default withStyles(styles)(Video);