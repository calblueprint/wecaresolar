import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ResourceStyles';
import { isVideo, Resource } from '../../store/resourcesSlice';
import VideoCard from './VideoCard';
import InstructionCard from './InstructionCard';
interface ResourceCardProps {
  resource: Resource;
  resourceID: string;
  includeCheck: boolean;
  expand: boolean;
  classes: any;
}

const ResourceCard = (props: ResourceCardProps): typeof ResourceCard => {
  const { classes } = props;
  const resource = props.resource;
  const type = resource.type;

  if (type == 'Article') {
    return (
      <InstructionCard
        resource={props.resource}
        resourceID={props.resourceID}
        expand={props.expand}
        classes={props.classes}
        includeCheck={props.includeCheck}
      />
    );
  } else {
    if (isVideo(resource.data)) {
      return (
        <VideoCard
          resource={props.resource}
          resourceID={props.resourceID}
          viewAll={props.expand}
          classes={props.classes}
          completeCheck={props.includeCheck}
        />
      );
    }
  }
};

export default withStyles(styles)(ResourceCard);
