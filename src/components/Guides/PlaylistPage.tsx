import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../Cards/StandardCard';

type PlaylistPageProps = {
  lessonId: string,
}

const PlaylistPage = ({ lessonId }: PlaylistPageProps) => {
  const lessons = useSelector((state: RootState) => state.lessons);
  const resources = useSelector((state: RootState) => state.resources);
  const currentLesson = lessons[lessonId];
  return (
    <div>
      <h1>{currentLesson.title}</h1>
      <h3>Description</h3>
      <p>{currentLesson.description}</p>
      <h3>You Will Learn</h3>
      <ul>
        {currentLesson.objectives.map((item) => (
          <li>item</li>
        ))}
      </ul>
      <h3>Content</h3>
      {currentLesson.resourceIDs.map((id) => {
        if (id in resources) {
          return <StandardCard 
            resource={resources[id]} 
            resourceID={id} 
            completeCheck={true} 
            collapsed={resources[id].isCompleted}/>;
        } else {
          return <span />;
        }
      })}
    </div>
  );
};

export default PlaylistPage;
