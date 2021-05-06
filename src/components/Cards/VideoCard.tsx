import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoCardStyles';
import {
  isVideo,
  Resource,
  setResourceIsCompleted
} from '../../store/resourcesSlice';
import FavoriteButton from '../CardComponents/FavoriteButton';
import Fab from '@material-ui/core/Fab';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useDispatch } from 'react-redux';
import CompletedButton from '../CardComponents/CompletedButton';
import { Link } from 'react-router-dom';
import CacheableImage from '../Offline/CacheableImage';

interface VideoCardProps {
  resource: Resource;
  resourceID: string;
  expand: boolean;
  classes: any;
  includeCheck: boolean;
}

const VideoCard = (props: VideoCardProps): typeof VideoCard => {
  const { classes } = props;
  const resource = props.resource;
  const url = '/Guides/Videos/' + props.resourceID;

  const dispatch = useDispatch();
  function handleOverlay(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(
      setResourceIsCompleted({
        id: props.resourceID,
        isCompleted: !props.resource.isCompleted
      })
    );
  }
  if (isVideo(resource.data)) {
    if (props.expand) {
      return (
        <Link className={classes.link} to={url}>
          <Card className={classes.videoCardAll}>
            <CacheableImage
              className={classes.thumbnailAll}
              src={resource.data.imageUrl}
            />
            {props.includeCheck ? (
              <div className={classes.complete}>
                <CompletedButton
                  isCompleted={resource.isCompleted}
                  handleClick={handleOverlay}
                  fillColor={'#33BF68'}
                  width={'24'}
                  height={'24'}
                />
              </div>
            ) : (
              <span />
            )}
            <div className={classes.favorite}>
              <FavoriteButton
                id={props.resourceID}
                isFavorited={resource.isFavorited}
                fillColor={'#020202'}
              />
            </div>
            <Fab className={classes.button} variant="extended">
              <AccessTimeIcon className={classes.clock}></AccessTimeIcon>
              <text className={classes.duration}>{resource.data.duration}</text>
            </Fab>
          </Card>
        </Link>
      );
    } else {
      return (
        <Link className={classes.link} to={url}>
          <Card className={classes.videoCard}>
            <CacheableImage
              className={classes.thumbnail}
              src={resource.data.imageUrl}
            />
          </Card>
        </Link>
      );
    }
  }
};

export default withStyles(styles)(VideoCard);
