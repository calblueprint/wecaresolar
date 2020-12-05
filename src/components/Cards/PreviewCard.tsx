import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FavoriteButton from '../Favorites/FavoriteButton';
import CompletedButton from '../Completed/CompletedButton';
import { styles } from './PreviewCardStyles';

interface PreviewCardProps {
    resource: Resource,
    resourceID: number
    classes: any
}

const PreviewCard = (props: PreviewCardProps) => {
    const { classes } = props;
    return (
        <Card className={classes.root}>
            <CardActions>
                <FavoriteButton
                    id={props.resourceID}
                    isFavorited={props.resource.isFavorited}
                />
                <CompletedButton
                    id={props.resourceID}
                    isCompleted={props.resource.isCompleted}
                />
            </CardActions>
            <CardHeader
                title={props.resource.title}
                titleTypographyProps={{ variant: 'h6' }}
                subheader={props.resource.type}
                subheaderTypographyProps={{ variant: 'body1' }}
            />
            <CardContent>{props.resource.data.preview}</CardContent>
        </Card>
    );
};

export default withStyles(styles)(PreviewCard);