import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ResourceStyles';
import { isVideo, Resource } from '../../store/resourcesSlice';
import VideoCard from '../Video/VideoCard';

interface ResourceCardProps {
  resource: Resource;
  resourceID: string;
  viewAll: boolean;
  classes: any;
  completeCheck: boolean;
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
  } else {
    if (isVideo(resource.data)) {
      return (
        <VideoCard
          resource={props.resource}
          resourceID={props.resourceID}
          viewAll={props.viewAll}
          classes={props.classes}
          completeCheck={false}
        ></VideoCard>
      );
    }
  }
};

export default withStyles(styles)(ResourceCard);
