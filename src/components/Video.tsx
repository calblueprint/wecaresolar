import React from 'react';
import DownloadButton from './DownloadButton';
import FavoriteButton from './FavoriteButton';
import Label from './Label'
import { get } from 'idb-keyval';
import { videoStore } from '../index'
import { Resource, videoOrArticle } from '../store/resourcesSlice'
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
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  let videoUrl;

  if (videoDetails.isCached) {
    get(resId, videoStore).then(videoBlob => {
      if (videoBlob !== undefined) {
        videoUrl = URL.createObjectURL(videoBlob);
      }
    });
  } else {
    videoUrl = videoOrArticle(videoDetails.data) ? videoDetails.data.watchUrl : null
  }

  return (
    <div>
      <h1>Insert Title</h1>
      {videoUrl != null ? <iframe src={"//www.youtube.com/embed/" + getId(videoUrl)}
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
      /> : <p>Unable to Display</p>}

      <FavoriteButton id={resId} isFavorited={videoDetails.isFavorited} />
      {videoDetails.isCached ? <p>Already Downloaded</p> : <DownloadButton id={resId} videoData={videoDetails.data} />}
      <div className={classes.labelList}>
        {videoDetails.tags.map(tag => <Label title={tag} />)}
      </div>
    </div>
  )
}

export default Video;