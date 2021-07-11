import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './InstructionCardStyles';
import { Resource } from '../../store/resourcesSlice';
import { useDispatch } from 'react-redux';
import { setResourceIsCompleted } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../CardComponents/FavoriteButton';
import CompletedButton from '../CardComponents/CompletedButton';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { resourceTypes } from '../../resourceTypes';

interface InstructionCardProps {
  resource: Resource;
  resourceID: string;
  expand: boolean;
  includeCheck: boolean;
  classes: any;
}

const InstructionCard = (props: InstructionCardProps) => {
  const { classes } = props;
  const resource = props.resource;

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

  const url = '/Guides/' + resourceTypes.INSTRUCTION + '/' + props.resourceID;

  if (!props.expand) {
    return (
      <Link className={classes.link} to={url}>
        <Card className={classes.articleCard}>
          <div className={classes.box}>
            {props.includeCheck ? (
              <div className={classes.buttonColumn}>
                {' '}
                <CompletedButton
                  isCompleted={props.resource.isCompleted}
                  handleClick={handleOverlay}
                  fillColor={'#33BF68'}
                  width={'20'}
                  height={'20'}
                />
              </div>
            ) : null}
            <Typography variant="h3">{resource.title}</Typography>
            <Typography variant="body1">{resource.data.preview}</Typography>
            <div className={classes.favorite}>
              <FavoriteButton
                id={props.resourceID}
                isFavorited={props.resource.isFavorited}
                fillColor={'#020202'}
              />
            </div>
          </div>
        </Card>
      </Link>
    );
  }
  return (
    <Link className={classes.link} to={url}>
      <Card className={classes.card}>
        <div className={classes.box}>
          {props.includeCheck ? (
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
              <Typography variant="h3">{props.resource.title}</Typography>
              <div className={classes.favorite}>
                <FavoriteButton
                  id={props.resourceID}
                  isFavorited={props.resource.isFavorited}
                  fillColor={'#020202'}
                />
              </div>
            </div>
            {props.resource.isCompleted ? null : (
              <Typography variant="h3">
                {props.resource.data.preview}
              </Typography>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(InstructionCard);
