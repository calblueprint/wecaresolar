import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCard from './PreviewCard';
import { RootState } from '../store/reducers';
import { ResourcesSlice } from '../store/resourcesSlice';
import { Topic } from '../store/topicsSlice'; 

//in card component --> pass in the topics prop 
//was thinking we can get topic + image from TopicCard component --> how to do this? 
interface TopicViewProps {
  topic: Topic,
}

function TopicViews (props : TopicViewProps) {
  const selectTopicResources = (state: RootState) =>
  Object.keys(state.resources as ResourcesSlice)
    .filter((id) => state.resources[(id as unknown) as number].tags.includes('{props.topic.name}', 0) && 
                    !state.resources[(id as unknown) as number].tags.includes('Troubleshooting', 0))
    .reduce<ResourcesSlice>((res, key) => {
      res[(key as unknown) as number] =
        state.resources[(key as unknown) as number];
      return res; 
    }, {});

  const selectTroubleshootingResources = (state: RootState) =>
    Object.keys(state.resources as ResourcesSlice)
      .filter((id) => state.resources[(id as unknown) as number].tags.includes('{props.topic.name}', 0) &&
                      state.resources[(id as unknown) as number].tags.includes('Troubleshooting', 0))
      .reduce<ResourcesSlice>((res, key) => {
        res[(key as unknown) as number] =
          state.resources[(key as unknown) as number];
        return res; 
      }, {});


  console.log(props); 
  const topics = useSelector(selectTopicResources);
  const troubleshooting = useSelector(selectTroubleshootingResources); 

  return (
    <div>
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