import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './StandardCardStyles';
import { Resource, resourcesSlice } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../CardComponents/FavoriteButton';
import CompletedButton from '../CardComponents/CompletedButton';
import { Link } from 'react-router-dom';

interface StandardCardProps {
  resource: Resource;
  resourceID: number;
  classes: any;
  completeCheck: boolean;
  collapsed: boolean;
}

const StandardCard = (props: StandardCardProps) => {
  const { classes } = props;
  let url = '/Guides/';
  if (props.resource.type == 'Video') {
    url = '/Guides/Videos/' + props.resourceID;
  } else {
    url = '/Guides/Articles/' + props.resourceID;
  }
  return (
    <Link className={classes.link} to={url}>
      <Card className={classes.card}>
        <div className={classes.box}>
          {props.completeCheck ? (<div className={classes.buttonColumn}> <CompletedButton
            id={props.resourceID}
            isCompleted={props.resource.isCompleted}
          /></div>) : null}
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
              : (<p className={classes.body}>{props.resource.data.preview}</p>)}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(StandardCard);
