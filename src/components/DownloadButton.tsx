import React from 'react';
import { set } from 'idb-keyval';
import GetAppIcon from '@material-ui/icons/GetApp';
import { videoOrArticle, VideoData, ArticleData } from '../store/resourcesSlice'
import { videoStore } from '../index'
import Button from '@material-ui/core/Button';

type DownloadButtonProps = {
  id: number,
  videoData?: VideoData | ArticleData,
}

const DownloadButton = ({ id, videoData }: DownloadButtonProps) => {
  async function downloadVideo(resId, videoStore, videoData) {
    let downloadUrl = videoOrArticle(videoData) ? videoData.downloadUrl : null
    if (downloadUrl) {
      let blob = await fetch(downloadUrl).then(res => res.blob())
      set(resId, blob, videoStore).then(() => console.log("Success"));
    }
  }
  return (
    <Button variant="contained" color="primary" onClick={() => downloadVideo(id, videoStore, videoData)}>
      Download
      <GetAppIcon />
    </Button>
  );
}

export default DownloadButton;