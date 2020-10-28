import React from 'react';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
import Label from './Label'
import { set, get } from 'idb-keyval';
import { videoStore } from '../index'
import { Resource, videoOrArticle } from '../store/resourcesSlice'
var S3 = require('aws-sdk/clients/s3');

type VideoProps = {
  resId: number,
  videoDetails: Resource,
}

const Video = ({ resId, videoDetails }: VideoProps) => {
  let videoUrl;

  // if videoURL is cached, get it
  if (videoDetails.isCached) {
    console.log("CACHED")
    get(resId, videoStore).then(videoBlob => {
      if (videoBlob !== undefined) {
        videoUrl = URL.createObjectURL(videoBlob);
      }
    });
  } else {
    videoUrl = videoOrArticle(videoDetails.data) ? videoDetails.data.watchUrl : null
  }

  function getId(url) {
    // this regex function is from stackoverflow 
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }


  function downloadVideo() {
    let downloadUrl = videoOrArticle(videoDetails.data) ? videoDetails.data.downloadUrl : null
    console.log(downloadUrl)
    if (!videoDetails.isCached && downloadUrl) {
      let urlArray = downloadUrl.split("/")
      let bucket = urlArray[3]
      let key = `${urlArray[4]}/${urlArray[5]}`
      let s3 = new S3({ params: { Bucket: bucket } })
      let params = { Bucket: bucket, Key: key }

      s3.getObject(params, (err, data) => {
        console.log(data, err)
        if (!err) {
          let blob = new Blob([data.Body], { type: data.ContentType });
          console.log(blob)

          set(resId, blob, videoStore).then(() => console.log("Success"));

        }
      })
      //set videoDetails to cached

    }
  }

  return (
    <div>

      <h1>Insert Title</h1>
      {videoUrl != null ? <iframe src={"//www.youtube.com/embed/" + getId(videoUrl)}
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
      /> : <p>Unable to Display</p>}
      <button type="button" onClick={() => downloadVideo()}>Download</button>

      {videoDetails.isFavorited ? <Label title="Favorite" icon={<TurnedInIcon />} /> : <Label title="UnFavorite" icon={<TurnedInNotIcon />} />}
      {videoDetails.isCached ? <Label title="Downloaded" icon={<GetAppIcon />} /> : <span />}
      {videoDetails.tags.map(tag => <Label title={tag} />)}
    </div>
  )
}

export default Video;