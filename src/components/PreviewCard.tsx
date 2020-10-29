import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Resource } from '../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FavoriteButton from './FavoriteButton';

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 12
  }
});

interface PlaylistCardProps {
  resource: Resource;
  resourceID: number;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.resource.title}
        titleTypographyProps={{ variant: 'h6' }}
        subheader={props.resource.type}
        subheaderTypographyProps={{ variant: 'body1' }}
        action={
          <FavoriteButton
            id={props.resourceID}
            isFavorited={props.resource.isFavorited}
          />
        }
      />
      <CardContent>{props.resource.data.preview}</CardContent>
    </Card>
  );
};

const favoritedResource: Resource = {
  type: 'Article',
  title: 'here is a descriptive title',
  tags: ['Help what other topics are there'],
  data: {
    preview: 'this is an article preview ....',
    textUrl: '<cloud firestore or s3 link here>',
    fileSize: 13050 // QUESTION: file size on text resources?
  },
  isFinished: false, // QUESTION: once viewed, or manually mark finished?
  isCached: false, // QUESTION: allow caching text resources?
  isFavorited: true
};

PlaylistCard.defaultProps = favoritedResource;

export default PlaylistCard;
