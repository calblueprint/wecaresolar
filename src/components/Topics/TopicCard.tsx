import React from 'react';
import { Topic } from '../../store/topicsSlice';
import Card from '@material-ui/core/Card';
import { useStyles } from './TopicStyle';
import { CardMedia } from '@material-ui/core';

type TopicCardProps = {
    topic: Topic,
}

const TopicCard = ({ topic }: TopicCardProps) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <div className={classes.topic}>{topic.name}</div>
            <CardMedia className={classes.image} image={topic.imageUrl}></CardMedia>
        </Card>
    );
}

export default TopicCard;  