import React from 'react';
import { set } from 'idb-keyval';
import GetAppIcon from '@material-ui/icons/GetApp';
import { VideoData } from '../../store/resourcesSlice'
import { videoStore } from '../../index'
import { useDispatch } from 'react-redux';
import { setResourceIsCached } from '../../store/resourcesSlice';
import { blobToArrayBuffer } from './VideoFunctions'
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoStyles';

type DownloadButtonProps = {
  id: string,
  videoData: VideoData,
  classes: any;
}

const DownloadButton = ({ id, videoData, classes }: DownloadButtonProps) => {
  const dispatch = useDispatch();

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
    <button className={`${classes.filledButton} ${classes.button}`} onClick={() => downloadVideo(id, videoStore, videoData)}>
      Download
      <GetAppIcon style={{ color: "black" }} />
    </button>
  );
}

export default withStyles(styles)(DownloadButton); 
