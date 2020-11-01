import React from 'react';
import DownloadButton from './DownloadButton';
import FavoriteButton from './FavoriteButton';
import Label from './Label'
import { get } from 'idb-keyval';
import { videoStore } from '../index'
import { Resource, isVideo } from '../store/resourcesSlice'
import { makeStyles, createStyles } from "@material-ui/core/styles"

type VideoProps = {
  resId: number,
  videoDetails: Resource,
}

const styles = makeStyles(() => createStyles({
  labelList: {
    display: "flex",
    flexDirection: "row",

  }
}))

const Video = ({ resId, videoDetails }: VideoProps) => {

  const classes = styles();

  function getId(url) {
    console.log("HELLO")
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
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

  function getVideo() {
    if (isVideo(videoDetails.data)) {
      if (videoDetails.isCached) {
        get(resId, videoStore).then(videoBlob => {
          console.log(videoBlob)
          if (videoBlob !== undefined) {
            return <video src={URL.createObjectURL(videoBlob)} />
          }
        }).catch((error) => console.log(error))
      } else {
        return < iframe src={"//www.youtube.com/embed/" + getId(videoDetails.data.watchUrl)}
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      }
    }

  }

  return (
    <div>
      <h1>Insert Title</h1>
      { getVideo()}

      <FavoriteButton id={resId} isFavorited={videoDetails.isFavorited} />
      {createDownloadButton()}
      <div className={classes.labelList}>
        {videoDetails.tags.map(tag => <Label title={tag} />)}
      </div>
    </div>
  )
}

export default Video;