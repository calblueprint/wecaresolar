import React from 'react';
import Card from '@material-ui/core/Card';
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
          <img className={classes.thumbnailAll} src="https://ucd542fb5efd1eb3e500fc0c6345.previews.dropboxusercontent.com/p/thumb/ABKZCv2qA-9HcNK4jDfSV4NRfTm8mfk6hUdU00DqX_OkOuiLVC16cpqpCGqgFZZZgIUO_zbJZpagq9OeDyN-xakpN5duv9OM_EYrbn9Acuz4Ld7Qm4rluWYR--owNWLf7XooL_Qzk96TQeXX72-okTwFZTuFF6LkS__yYckuxZiPNw9lYDxnUVR_hyE_2yG8dCT_wqVYUFBEDSOmwoAnwFTEiqpb2lafnCG-enwixuzOd8drdTJDys-h7XWfRtwLQumZU6lqsNBmKgDqAeAa8M9520kIbEbLEucypAkRMSBmhro-Eg8o_UfNoguGSZsw0XBymaXv4ccsJr4BGZv4sqVdkVRQliz3KVfE7K4Kx9DlQOMi8-u0iuL1emcZx-1P1kg/p.jpeg?fv_content=true&size_mode=5"/>
          <div className={classes.favorite}>
            <FavoriteButton
              id={props.resourceID}
              isFavorited={resource.isFavorited}
            />
          </div>
          <Fab className={classes.button} variant="extended">
            <AccessTimeIcon className={classes.clock}></AccessTimeIcon>
            <text className={classes.duration}>{resource.data.duration}</text>
          </Fab>
        </Card>
      );
    } else {
      return (
        <Card className={classes.videoCard}>
          <img className={classes.thumbnail} src="https://ucd542fb5efd1eb3e500fc0c6345.previews.dropboxusercontent.com/p/thumb/ABKZCv2qA-9HcNK4jDfSV4NRfTm8mfk6hUdU00DqX_OkOuiLVC16cpqpCGqgFZZZgIUO_zbJZpagq9OeDyN-xakpN5duv9OM_EYrbn9Acuz4Ld7Qm4rluWYR--owNWLf7XooL_Qzk96TQeXX72-okTwFZTuFF6LkS__yYckuxZiPNw9lYDxnUVR_hyE_2yG8dCT_wqVYUFBEDSOmwoAnwFTEiqpb2lafnCG-enwixuzOd8drdTJDys-h7XWfRtwLQumZU6lqsNBmKgDqAeAa8M9520kIbEbLEucypAkRMSBmhro-Eg8o_UfNoguGSZsw0XBymaXv4ccsJr4BGZv4sqVdkVRQliz3KVfE7K4Kx9DlQOMi8-u0iuL1emcZx-1P1kg/p.jpeg?fv_content=true&size_mode=5"/>
        </Card>
      );
    }
  }
};

export default withStyles(styles)(VideoCard);