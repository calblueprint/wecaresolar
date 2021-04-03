import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './StandardCardStyles';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../CardComponents/FavoriteButton';
import CompletedButton from '../CardComponents/CompletedButton';

interface StandardCardProps {
  resource: Resource;
  resourceID: string;
  classes: any;
  completeCheck: boolean;
  collapsed: boolean;
}

const StandardCard = (props: StandardCardProps) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.box}>
        {props.completeCheck ? (<div className={classes.buttonColumn}> <CompletedButton
          id={props.resourceID}
          isCompleted={props.resource.isCompleted}
        /></div>) : null }
        <div className={classes.contentColumn}>
          <div className={classes.titleButtonRow}>
            <div className={classes.title}>{props.resource.title}</div>
            {/* <h5 className={classes.type}>{props.resource.type}</h5> */}
            <div className={classes.favorite}>
              <FavoriteButton
                id={props.resourceID}
                isFavorited={props.resource.isFavorited}
              />
            </div>
          </div>
          {props.collapsed ? null 
          : (<p className={classes.body}>{props.resource.data.preview}</p>) }
          
        </div>
      </div>
      
    </Card>
  );
};

export default withStyles(styles)(StandardCard);
