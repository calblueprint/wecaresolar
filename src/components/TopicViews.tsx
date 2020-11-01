import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCard from './PreviewCard';
import { RootState } from '../store/reducers';
import { ResourcesSlice } from '../store/resourcesSlice';
import TopicHeader from './TopicHeader';

interface TopicViewProps {
  topicId: number, 
}

function TopicViews( { topicId }: TopicViewProps) {
  const allTopics = useSelector((state: RootState) => state.topics); 
  const currentTopic = allTopics[topicId]; 
  const name = currentTopic.name;

  const selectTopicResources = (state: RootState) =>
    Object.keys(state.resources as ResourcesSlice)
      .filter(
        (id) =>
          state.resources[(id as unknown) as number].tags.includes(name, 0) &&
          !state.resources[(id as unknown) as number].tags.includes('Troubleshooting', 0))
      .reduce<ResourcesSlice>((res, key) => {
        res[(key as unknown) as number] =
          state.resources[(key as unknown) as number];
        return res;
      }, {});

  const selectTroubleshootingResources = (state: RootState) =>
    Object.keys(state.resources as ResourcesSlice)
      .filter(
        (id) =>
          state.resources[(id as unknown) as number].tags.includes(name, 0) &&
          state.resources[(id as unknown) as number].tags.includes('Troubleshooting', 0))
      .reduce<ResourcesSlice>((res, key) => {
        res[(key as unknown) as number] =
          state.resources[(key as unknown) as number];
        return res;
      }, {});

  const topics = useSelector(selectTopicResources);
  const troubleshooting = useSelector(selectTroubleshootingResources);

  const headerStyle = {
    width: '360px',
    height: '145px',
    backgroundImage: `url(${currentTopic.url})`,
    backgroundSize: 'cover'
  };

  //iterate through keys and manually count Video + Article type
  function countMedia(obj, media: string) {
    let count = 0;
    for (const resource in obj) {
      if (obj[resource].type == media) {
        count = count + 1;
      }
    }
    return count;
  }

  const articleCount =
    countMedia(topics, 'Article') + countMedia(troubleshooting, 'Article');

  const videoCount =
    countMedia(topics, 'Video') + countMedia(troubleshooting, 'Video');


  return (
    <div>
      <div style={headerStyle}>
        <TopicHeader
          topicTitle={currentTopic.name}
          articleCount={articleCount}
          videoCount={videoCount}
        />
      </div>
      <div>
        {Object.keys(topics).map((resource: any) => (
          <PreviewCard resource={topics[resource]} resourceID={resource} />
        ))}
      </div>
      <div>
        <h2>Facing Issues?</h2>
        {Object.keys(troubleshooting).map((resource: any) => (
          <PreviewCard resource={troubleshooting[resource]} resourceID={resource} />
        ))}
      </div>
    </div>
  );
}

export default TopicViews;
