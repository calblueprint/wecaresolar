import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './StandardCardStyles';
import { Resource } from '../../store/resourcesSlice';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
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
  const dispatch = useDispatch();
  function handleOverlay(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(
      setResourceIsCompleted({
        id: props.resourceID,
        isCompleted: !props.resource.isCompleted
      })
    );
  }

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
          <div className={classes.contentColumn}>
            <div className={classes.titleButtonRow}>
              <div className={classes.title}>{props.resource.title}</div>
              {/* <h5 className={classes.type}>{props.resource.type}</h5> */}
              <div className={classes.favorite}>
                <FavoriteButton
                  id={props.resourceID}
                  isFavorited={props.resource.isFavorited}
                  fillColor={'#020202'}
                />
              </div>
            </div>
            {props.collapsed ? null : (
              <p className={classes.body}>{props.resource.data.preview}</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(StandardCard);
