import React from 'react';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import { useStyles } from './VideoStyle';
import { CardMedia } from '@material-ui/core';

type VideoCardProps = {
    video: Resource,
}

const VideoCard = ({ video }: VideoCardProps) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardMedia className={classes.image} image={video.data.image}></CardMedia>
        </Card>
    );
}

export default VideoCard; 