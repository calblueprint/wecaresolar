import React from 'react';
import { useSelector } from 'react-redux';
import ResourceCard from '../Cards/ResourceCard';
import { RootState } from '../../store/reducers';
import { ResourcesSlice } from '../../store/resourcesSlice';
import TopicHeader from './TopicHeader';
import { styles } from './TopicStyles';
import { withStyles } from '@material-ui/core';

interface TopicViewProps {
  classes: any;
  topicId: string;
}

function TopicViews({ topicId, classes }: TopicViewProps) {
  const currentTopic = useSelector((state: RootState) => state.topics[topicId]);
  const name = currentTopic.name;

  const headerStyle = {
    backgroundImage: `url(${currentTopic.imageUrl})`,
    backgroundSize: 'cover'
  };

  const selectTopicResources = (state: RootState) =>
    Object.keys(state.resources as ResourcesSlice)
      .filter(
        (id) =>
          state.resources[id].tags.includes(name, 0) &&
          !state.resources[id].tags.includes('Troubleshooting', 0)
      )
      .reduce<ResourcesSlice>((res, key) => {
        res[key] = state.resources[key];
        return res;
      }, {});

  const guideResources = useSelector(selectTopicResources);

  const countMedia = (obj, media: string) =>
    Object.keys(obj).filter((id) => obj[id].type == media).length;

  const articleCount = countMedia(guideResources, 'Article');

  const videoCount = countMedia(guideResources, 'Video');

  return (
    <div className={classes.root}>
      <div style={headerStyle}>
        <TopicHeader
          topicTitle={currentTopic.name}
          articleCount={articleCount}
          videoCount={videoCount}
        />
      </div>
      <div>
        {Object.keys(guideResources).map((resource: any) => (
          <ResourceCard
            resource={guideResources[resource]}
            resourceID={resource}
            includeCheck={false}
            expand={true}
          />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(TopicViews);
