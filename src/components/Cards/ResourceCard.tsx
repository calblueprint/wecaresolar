import React from 'react';
import { isVideo, Resource } from '../../store/resourcesSlice';
import VideoCard from './VideoCard';
import InstructionCard from './InstructionCard';
interface ResourceCardProps {
  resource: Resource;
  resourceID: string;
  includeCheck: boolean;
  includePhoto: boolean;
  expand: boolean;
}

const ResourceCard = (props: ResourceCardProps): typeof ResourceCard => {
  const resource = props.resource;
  const type = resource.type;

  if (type == 'Article') {
    return (
      <InstructionCard
        resource={props.resource}
        resourceID={props.resourceID}
        expand={props.expand}
        includeCheck={props.includeCheck}
      />
    );
  } else {
    if (isVideo(resource.data)) {
      console.log(props.includePhoto);
      return (
        <VideoCard
          resource={props.resource}
          resourceID={props.resourceID}
          expand={props.expand}
          includeCheck={props.includeCheck}
          includePhoto={props.includePhoto}
        />
      );
    }
  }
};

export default ResourceCard;
