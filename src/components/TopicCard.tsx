import React from 'react';
import { Topic } from '../store/topicsSlice';
import Card from '@material-ui/core/Card';

type TopicCardProps = {
  topic: Topic,
}

const TopicCard = ({ topic }: TopicCardProps) => {

  return (
    <Card>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
    </Card>
  );
}

export default TopicCard;