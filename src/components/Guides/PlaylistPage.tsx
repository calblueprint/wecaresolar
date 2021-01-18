import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../Cards/StandardCard';

type PlaylistPageProps = {
  lessonId: number;
};

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
      {currentLesson.resourceIds.map((id) => {
        if (id in resources) {
          return <StandardCard resource={resources[id]} resourceID={id} />;
        } else {
          return <span />;
        }
      })}
    </div>
  );
};

export default PlaylistPage;
