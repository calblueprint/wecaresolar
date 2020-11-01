import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCard from './PreviewCard';
import { RootState } from '../store/reducers';
import { ResourcesSlice } from '../store/resourcesSlice';
import { Topic } from '../store/topicsSlice';
import TopicHeader from './TopicHeader';

//in card component --> pass in the topics prop
//was thinking we can get topic + image from TopicCard component --> how to do this?
interface TopicViewProps {
  topic: Topic
}

function TopicViews(props: TopicViewProps) {
  const name: string = props.topic.name;
  //only want {} when evaluate as javascript in react, but props.topic.name is already javascript

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
    backgroundImage: `url(${props.topic.url})`,
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

  console.log(props.topic); 


  return (
    <div>
      <div style={headerStyle}>
        <TopicHeader
          topicTitle={props.topic.name}
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
