import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import FavoriteButton from './Favorites/FavoriteButton';
import Label from './Label'
import { get } from 'idb-keyval';
import { videoStore } from '../index'
import { Resource, VideoData, isVideo } from '../store/resourcesSlice'
import { makeStyles, createStyles } from "@material-ui/core/styles"
import ReactPlayer from 'react-player'


type VideoProps = {
  resId: number,
  videoDetails: Resource,
  videoData: VideoData
}

const styles = makeStyles(() => createStyles({
  labelList: {
    display: "flex",
    flexDirection: "row",

  }
}))

const Video = ({ resId, videoDetails, videoData }: VideoProps) => {

  const [videoUrl, setVideoUrl] = useState(
    videoData.watchUrl
  );

  useEffect(() => { refreshVideoUrl() },
    [videoDetails.isCached],
  );

  const classes = styles();

  function getId(url) {
    console.log("HELLO")
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  function arrayBufferToBlob(buffer, type) {
    return new Blob([buffer], { type: type });
  }

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
    <div>
      <h1>Insert Title</h1>
      <ReactPlayer url={videoUrl} playing controls />

      <FavoriteButton id={resId} isFavorited={videoDetails.isFavorited} />
      {createDownloadButton()}
      <div className={classes.labelList}>
        {videoDetails.tags.map(tag => <Label title={tag} />)}
      </div>
    </div>
  )
}

export default Video;