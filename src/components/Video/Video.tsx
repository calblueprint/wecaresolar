import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import FavoriteButton from '../CardComponents/FavoriteButton';
import Tag from '../CardComponents/Tag';
import { get } from 'idb-keyval';
import { videoStore } from '../../index';
import { Resource, VideoData, isVideo } from '../../store/resourcesSlice';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoStyles';
import { getId, arrayBufferToBlob } from './VideoFunctions';
import { useDispatch } from 'react-redux';
import { setResourceIsCached } from '../../store/resourcesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import DeleteButton from './DeleteButton';
import { topicsSlice } from '../../store/topicsSlice';

type VideoProps = {
  resId: string;
  classes: any;
};

const Video = ({ resId, classes }: VideoProps) => {
  const resources = useSelector((state: RootState) => state.resources);
  const topics = useSelector((state: RootState) => state.topics);
  const dispatch = useDispatch();
  const videoDetails = resources[resId];
  const videoData = videoDetails.data as VideoData;

  const [videoUrl, setVideoUrl] = useState(videoData.watchUrl);

  useEffect(() => {
    refreshVideoUrl();
  }, [videoDetails.isCached]);

  function createButtonSet() {
    if (isVideo(videoDetails.data)) {
      if (!videoDetails.isCached) {
        return (
          <div className={classes.buttons}>
            <div
              className={`${classes.outlineButton} ${classes.button} ${classes.noDownload}`}
            >
              Not downloaded
            </div>
            <DownloadButton id={resId} videoData={videoDetails.data} />
          </div>
        );
      } else {
        return (
          <div className={classes.buttons}>
            <div
              className={`${classes.outlineButton} ${classes.button} ${classes.Download}`}
            >
              Downloaded
            </div>
            <DeleteButton id={resId} />
          </div>
        );
      }
    }
  }

  function refreshVideoUrl() {
    if (isVideo(videoDetails.data)) {
      if (videoDetails.isCached) {
        get(resId, videoStore)
          .then((videoBlob) => {
            if (videoBlob !== undefined) {
              setVideoUrl(
                URL.createObjectURL(arrayBufferToBlob(videoBlob, 'video/mp4'))
              );
            } else {
              dispatch(
                setResourceIsCached({
                  id: resId,
                  isCached: false
                })
              );
            }
          })
          .catch((error) =>
            console.log(
              'Failed to download the video.' +
                'Please make sure that you are not in private browsing mode, and that you have enough space in your video storage'
            )
          );
      } else {
        setVideoUrl(
          '//www.youtube.com/embed/' + getId(videoDetails.data.watchUrl)
        );
      }
    }
  }

  return (
    <div className={classes.page}>
      <div className={classes.nonVideo}>
        <div className={classes.labelList}>
          {videoDetails.tags.map((tag) => (
            <Tag classes={classes} tag={tag} color={topics[tag].color} />
          ))}
        </div>
        <div className={classes.header}>
          <h1 className={classes.title}>{videoDetails.title}</h1>
          <FavoriteButton id={resId} isFavorited={videoDetails.isFavorited} fillColor={'#FFFFFF'} />
        </div>
      </div>
      <ReactPlayer url={videoUrl} playing controls width="100%" />
      <div className={classes.nonVideo}>{createButtonSet()}</div>
    </div>
  );
};

export default withStyles(styles)(Video);
