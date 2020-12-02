import React from 'react';
import { Topic } from '../../store/topicsSlice';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './TopicStyle';

type TopicCardProps = {
    topic: Topic;
    classes: any;
}

const TopicCard = (props: TopicCardProps) => {
    const { classes } = props;
    const topic = props.topic;

    return(
        <Card className={classes.card}>
            <h2 className={classes.title}>{topic.name}</h2>
            <CardMedia className={classes.image} image={topic.imageUrl}>
            </CardMedia>
        </Card>
    );
};

export default withStyles(styles)(TopicCard);