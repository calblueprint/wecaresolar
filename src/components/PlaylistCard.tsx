import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Resource, VideoData, ArticleData } from '../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 12
  }
});

const PlaylistCard = (props: Resource) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        titleTypographyProps={{ variant: 'h6' }}
        subheader={props.type}
        subheaderTypographyProps={{ variant: 'body1' }}
        action={
          <IconButton aria-label="favorite">
            {props.isFavorited && <BookmarkIcon />}
            {!props.isFavorited && <BookmarkBorderIcon />}
          </IconButton>
        }
      />
      <CardContent>{props.data}</CardContent>
    </Card>
  );
};

const defaultResource: Resource = {
  title: 'Lorem Ipsum',
  type: 'Article',
  tags: [],
  data: 'Lorem ipsum preview!',
  isFinished: false,
  isCached: false,
  isFavorited: false
};

export const favoritedResource: Resource = {
  title: 'Favorited',
  type: 'Article',
  tags: [],
  data: 'Lorem ipsum preview!',
  isFinished: false,
  isCached: false,
  isFavorited: true
};

PlaylistCard.defaultProps = favoritedResource;

export default PlaylistCard;
