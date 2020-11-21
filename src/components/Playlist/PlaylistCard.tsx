import React from 'react';
import { Lesson } from '../../store/lessonsSlice';
import Card from '@material-ui/core/Card';

type PlaylistCardProps = {
  lesson: Lesson,
}

const PlaylistCard = ({ lesson }: PlaylistCardProps) => {

  return (
    <Card>
      <h3>{lesson.title}</h3>
      <h5>{} Article(s)</h5>
      <h5>{} Video(s)</h5>
      <p>{lesson.description}</p>
    </Card>
  );
}

export default PlaylistCard;
