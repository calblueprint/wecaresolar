import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './StandardCardStyles';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../CardComponents/FavoriteButton';
import CompletedButton from '../CardComponents/CompletedButton';

interface StandardCardProps {
  resource: Resource;
  resourceID: number;
  classes: any;
}

const StandardCard = (props: StandardCardProps) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.row}>
        <div>
          <h3 className={classes.title}>{props.resource.title}</h3>
          <h5 className={classes.type}>{props.resource.type}</h5>
        </div>
        <FavoriteButton
          id={props.resourceID}
          isFavorited={props.resource.isFavorited}
        />
        <CompletedButton
          id={props.resourceID}
          isCompleted={props.resource.isCompleted}
        />
      </div>
      <p className={classes.body}>{props.resource.data.preview}</p>
    </Card>
  );
};

export default withStyles(styles)(StandardCard);
