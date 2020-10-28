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
  topic: Topic,
}

function TopicViews (props : TopicViewProps) {

  const name: string = props.topic.name; 
  //only want {} when evaluate as javascript in react, but props.topic.name is already javascript 

  const selectTopicResources = (state: RootState) =>
  Object.keys(state.resources as ResourcesSlice)
    .filter((id) => state.resources[(id as unknown) as number].tags.includes(name, 0) && 
                    !state.resources[(id as unknown) as number].tags.includes('Troubleshooting', 0))
    .reduce<ResourcesSlice>((res, key) => {
      res[(key as unknown) as number] =
        state.resources[(key as unknown) as number];
      return res; 
    }, {});

  const selectTroubleshootingResources = (state: RootState) =>
    Object.keys(state.resources as ResourcesSlice)
      .filter((id) => state.resources[(id as unknown) as number].tags.includes(name, 0) &&
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
    backgroundImage: `url(${props.topic.url})`
  }

  //iterate through keys and manually count Video + Article type 

  const artCount = 0; 
  const vidCount = 0; 


  return (
    <div>
      <div style={headerStyle}>
      <TopicHeader topicTitle={props.topic.name} articleCount={0} videoCount={0}/>
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