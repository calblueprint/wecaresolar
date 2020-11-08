import React from 'react';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import { useStyles } from './ArticlesStyle';

type ArticleCardProps = {
    resource: Resource,
}

const ArticleCard = ({ resource }: ArticleCardProps) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <p className={classes.title}>{resource.title}</p>
            <p className={classes.description}>{resource.data.preview}</p>
        </Card>
    );
}

export default ArticleCard;