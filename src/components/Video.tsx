import React from 'react';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
import Label from './Label'
import { set, get } from 'idb-keyval';
import { videoStore } from '../index'
import { Resource, VideoData, VideoOrArticle } from '../store/resourcesSlice'
var S3 = require('aws-sdk/clients/s3');

type VideoProps = {
  resId: number,
  videoDetails: Resource,
}

const videoOrArticle = (tbd: VideoOrArticle): tbd is VideoData => {
  if ((tbd as VideoData)) {
    return true;
  } else {
    return false;
  }
}

const Video = ({ resId, videoDetails }: VideoProps) => {
  let videoUrl = videoOrArticle(videoDetails.data) ? videoDetails.data.watchUrl : null;

  // if videoURL is cached, get it
  if (videoDetails.isCached) {
    let videoBlob = get(resId, videoStore);
    if (videoBlob !== undefined) {
      videoUrl = URL.createObjectURL(videoBlob);
    }
  }

  function downloadVideo() {
    if (!videoDetails.isCached && videoUrl) {
      let urlArray = videoUrl.split("/")
      let bucket = urlArray[3]
      console.log(bucket)
      let key = `${urlArray[4]}/${urlArray[5]}`
      let s3 = new S3({ params: { Bucket: bucket } })
      let params = { Bucket: bucket, Key: key }
      s3.getObject(params, (err, data) => {
        let blob = new Blob([data.Body], { type: data.ContentType });
        set(resId, blob, videoStore)
      })
    }
  }

  return (
    <div>

      <h1>Insert Title</h1>
      {videoUrl ? <iframe src={videoUrl}
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
      /> : <p>Unable to Display</p>}
      <button type="button" onClick={() => downloadVideo()}>Download</button>

      {videoDetails.isFavorited ? <Label title="Favorite" icon={<TurnedInIcon />} /> : <Label title="UnFavorite" icon={<TurnedInNotIcon />} />}
      {videoDetails.isCached ? <Label title="Downloaded" icon={<GetAppIcon />} /> : <span />}

    </div>
  )
}

export default Video;