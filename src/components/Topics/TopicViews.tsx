import React from 'react';
import { useSelector } from 'react-redux';
import StandardCard from '../Cards/StandardCard';
import { RootState } from '../../store/reducers';
import { ResourcesSlice } from '../../store/resourcesSlice';
import TopicHeader from './TopicHeader';
import { Typography } from '@material-ui/core';
import theme from '../../CustomStyles';

interface TopicViewProps {
  topicId: string;
}

function TopicViews({ topicId }: TopicViewProps) {
  const currentTopic = useSelector((state: RootState) => state.topics[topicId]);
  const name = currentTopic.name;

  const headerStyle = {
    backgroundImage: `url(${currentTopic.imageUrl})`,
    backgroundSize: 'cover'
  };
  const pageStyle = {
    padding: theme.spacing(1, 2, 1, 2)
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

  const selectTroubleshootingResources = (state: RootState) =>
    Object.keys(state.resources as ResourcesSlice)
      .filter(
        (id) =>
          state.resources[id].tags.includes(name, 0) &&
          state.resources[id].tags.includes('Troubleshooting', 0)
      )
      .reduce<ResourcesSlice>((res, key) => {
        res[key] = state.resources[key];
        return res;
      }, {});

  const guideResources = useSelector(selectTopicResources);
  const troubleshootingResources = useSelector(selectTroubleshootingResources);

  const countMedia = (obj, media: string) =>
    Object.keys(obj).filter((id) => obj[id].type == media).length;

  const articleCount =
    countMedia(guideResources, 'Article') +
    countMedia(troubleshootingResources, 'Article');

  const videoCount =
    countMedia(guideResources, 'Video') +
    countMedia(troubleshootingResources, 'Video');

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <TopicHeader
          topicTitle={currentTopic.name}
          articleCount={articleCount}
          videoCount={videoCount}
        />
      </div>
      <div>
        {Object.keys(guideResources).map((resource: any) => (
          <StandardCard
            resource={guideResources[resource]}
            resourceID={resource}
            completeCheck={false}
            collapsed={false}
          />
        ))}
      </div>
    </div>
  );
}

export default TopicViews;
