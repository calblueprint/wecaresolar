import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './StandardCardStyles';
<<<<<<< HEAD
import { Resource, resourcesSlice } from '../../store/resourcesSlice';
=======
import { Resource } from '../../store/resourcesSlice';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
>>>>>>> 539072eaca8761d78aa80866cccec384cc1decc2
import Card from '@material-ui/core/Card';
import FavoriteButton from '../CardComponents/FavoriteButton';
import CompletedButton from '../CardComponents/CompletedButton';
import { Link } from 'react-router-dom';

interface StandardCardProps {
  resource: Resource;
  resourceID: string;
  classes: any;
  completeCheck: boolean;
  collapsed: boolean;
}

const StandardCard = (props: StandardCardProps) => {
  const { classes } = props;
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
    function handleOverlay(event) {
        event.preventDefault();
        event.stopPropagation();
        dispatch(
            setResourceIsCompleted({
                id: props.resourceID,
                isCompleted: !props.resource.isCompleted,
            }))
    };
  
>>>>>>> 539072eaca8761d78aa80866cccec384cc1decc2
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
<<<<<<< HEAD
          {props.completeCheck ? (<div className={classes.buttonColumn}> <CompletedButton
            id={props.resourceID}
            isCompleted={props.resource.isCompleted}
          /></div>) : null}
=======
          {props.completeCheck ? (
            <div className={classes.buttonColumn}>
              {' '}
              <CompletedButton
                isCompleted={props.resource.isCompleted}
                handleClick={handleOverlay}
                fillColor={'#33BF68'}
                width={'24'}
                height={'24'}
              />
            </div>
          ) : null}
>>>>>>> 539072eaca8761d78aa80866cccec384cc1decc2
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
