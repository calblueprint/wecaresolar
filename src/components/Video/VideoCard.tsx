import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './VideoCardStyles';
import { isVideo, Resource } from '../../store/resourcesSlice';
import FavoriteButton from '../CardComponents/FavoriteButton';
import Fab from '@material-ui/core/Fab';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

interface VideoCardProps {
  resource: Resource;
  resourceID: string;
  viewAll: boolean;
  classes: any;
}

const VideoCard = (props: VideoCardProps): typeof VideoCard => {
  const { classes } = props;
  const resource = props.resource;

  if (isVideo(resource.data)) {
      if (props.viewAll) {
          return (
              <Card className={classes.videoCardAll}>
                  <img className={classes.thumbnailAll} src={resource.data.imageUrl}/>
                  <FavoriteButton id={props.resourceID} isFavorited={resource.isFavorited}/>
                  <Fab className={classes.button} variant='extended'>
                      <AccessTimeIcon className={classes.clock}></AccessTimeIcon>
                      {resource.data.duration}
                  </Fab>
              </Card>
          )
      } else {
          return (
              <Card className={classes.videoCard}>
                  <img className={classes.thumbnail} src={resource.data.imageUrl}/>
              </Card>
          )
      }
  }
}


export default withStyles(styles)(VideoCard);

/**  if (type == "Article") {
    return (
      <Card className={classes.articleCard}>
        <h3 className={classes.title}>{resource.title}</h3>
        <text className={classes.text}>{resource.data.preview}</text>
      </Card>
    )
  } else if (isVideo(resource.data) && props.viewAll) {
    return (
      <Card className={classes.videoCardAll}>
        <img className={classes.thumbnail} src={resource.data.imageUrl}/>
        <div className={classes.favorite}>
          <FavoriteButton
            id={props.resourceID}
            isFavorited={resource.isFavorited}
          />
        </div>
        <div>
          <Fab 
              className={classes.button}
              variant="extended">
                <AccessTimeIcon className={classes.clock}></AccessTimeIcon>
                <text className={classes.buttonText}>5:43</text>
            </Fab>
        </div>
      </Card>
    )
  } else if (isVideo(resource.data) && !props.viewAll) {
    return (
      <Card className={classes.videoCard}>
        <img className={classes.thumbnail} src={resource.data.imageUrl}/>
      </Card>
    )
  } else {
    return(
      console.log('Incorrect resource type')
    )
  }
}; */