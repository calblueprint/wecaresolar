import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ResourceStyles';
import { isVideo, Resource } from '../../store/resourcesSlice';
import FavoriteButton from '../CardComponents/FavoriteButton';
import Fab from '@material-ui/core/Fab';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

interface ResourceCardProps {
  resource: Resource;
  resourceID: string;
  viewAll: boolean;
  classes: any;
}

const ResourceCard = (props: ResourceCardProps): typeof ResourceCard => {
  const { classes } = props;
  const resource = props.resource;
  const type = resource.type;

  if (type == 'Article') {
    return (
      <Card className={classes.articleCard}>
        <h3 className={classes.title}>{resource.title}</h3>
        <text className={classes.text}>{resource.data.preview}</text>
      </Card>
    );
  } else if (isVideo(resource.data) && props.viewAll) {
    return (
      <Card className={classes.videoCardAll}>
        <img className={classes.thumbnail} src={resource.data.imageUrl} />
        <div className={classes.favorite}>
          <FavoriteButton
            id={props.resourceID}
            isFavorited={resource.isFavorited}
          />
        </div>
        <div>
          <Fab className={classes.button} variant="extended">
            <AccessTimeIcon className={classes.clock}></AccessTimeIcon>
            <text className={classes.buttonText}>5:43</text>
          </Fab>
        </div>
      </Card>
    );
  } else if (isVideo(resource.data) && !props.viewAll) {
    return (
      <Card className={classes.videoCard}>
        <img className={classes.thumbnail} src={resource.data.imageUrl} />
      </Card>
    );
  } else {
    return console.log('Incorrect resource type');
  }
};

export default withStyles(styles)(ResourceCard);
