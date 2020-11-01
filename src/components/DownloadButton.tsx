import React from 'react';
import { set } from 'idb-keyval';
import GetAppIcon from '@material-ui/icons/GetApp';
import { VideoData } from '../store/resourcesSlice'
import { videoStore } from '../index'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setResourceIsCached } from '../store/resourcesSlice';

type DownloadButtonProps = {
  id: number,
  videoData: VideoData,
}

const DownloadButton = ({ id, videoData }: DownloadButtonProps) => {
  const dispatch = useDispatch();

  async function downloadVideo(resId, videoStore, videoData) {
    let downloadUrl = videoData.downloadUrl
    if (downloadUrl) {
      let blob = await fetch(downloadUrl).then(res => res.blob())

      set(resId, blob, videoStore).then(() => console.log(blob)).catch(() => console.log(blob)).then(() => dispatch(setResourceIsCached({
        id: id,
        isCached: true,
      }))
      );
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