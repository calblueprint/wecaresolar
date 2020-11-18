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

  function blobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('loadend', (e) => {
        resolve(reader.result);
      });
      reader.addEventListener('error', reject);
      reader.readAsArrayBuffer(blob);
    });
  }

  async function downloadVideo(resId, videoStore, videoData) {
    let downloadUrl = videoData.downloadUrl
    if (downloadUrl) {
      let blob = await fetch(downloadUrl).then(res => res.blob())
      let arrayBuffer = await blobToArrayBuffer(blob)

      set(resId, arrayBuffer, videoStore).then(() => console.log(arrayBuffer))
        .then(() => dispatch(setResourceIsCached({
          id: resId,
          isCached: true,
        })))
        .catch(error => console.log(resId, error));
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