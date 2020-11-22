import React from 'react';
import { set } from 'idb-keyval';
import GetAppIcon from '@material-ui/icons/GetApp';
import { VideoData } from '../../store/resourcesSlice'
import { videoStore, platform } from '../../index'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { setResourceIsCached } from '../../store/resourcesSlice';
import { blobToArrayBuffer } from './VideoFunctions'

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
      let arraybuffer;
      if (platform != "Android") {
        arraybuffer = await blobToArrayBuffer(blob)
        blob = arraybuffer;
      }
      set(resId, blob, videoStore).then(() => console.log(blob))
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