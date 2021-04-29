import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoCardStyles';
import { isVideo, Resource } from '../../store/resourcesSlice';
import FavoriteButton from '../CardComponents/FavoriteButton';
import Fab from '@material-ui/core/Fab';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

interface VideoCardProps {
  resource: Resource;
  resourceID: string;
  viewAll: boolean;
  classes: any;
}

const VideoCard = (props: VideoCardProps): typeof VideoCard => {
  const { classes } = props;
  const resource = props.resource;

  if (isVideo(resource.data)) {
    if (props.viewAll) {
      return (
        <Card className={classes.videoCardAll}>
          <img className={classes.thumbnailAll} src={resource.data.imageUrl} />
          <div className={classes.favorite}>
            <FavoriteButton
              id={props.resourceID}
              isFavorited={resource.isFavorited}
            />
          </div>
          <Fab className={classes.button} variant="extended">
            <AccessTimeIcon className={classes.clock}></AccessTimeIcon>
            <text className={classes.duration}>{resource.data.duration}</text>
          </Fab>
        </Card>
      );
    } else {
      return (
        <Card className={classes.videoCard}>
          <img className={classes.thumbnail} src={resource.data.imageUrl} />
        </Card>
      );
    }
  }
};

export default withStyles(styles)(VideoCard);
