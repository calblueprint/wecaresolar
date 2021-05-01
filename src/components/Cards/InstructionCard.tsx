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

  const url = '/Guides/Instructions/' + props.resourceID;

  if (!props.expand) {
    return (
      <Link to={url}>
        <Card className={classes.articleCard}>
          <h3 className={classes.title}>{resource.title}</h3>
          <text className={classes.text}>{resource.data.preview}</text>
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
              <div className={classes.title}>{props.resource.title}</div>
              <div className={classes.favorite}>
                <FavoriteButton
                  id={props.resourceID}
                  isFavorited={props.resource.isFavorited}
                  fillColor={'#020202'}
                />
              </div>
            </div>
            {props.resource.isCompleted ? null : (
              <p className={classes.body}>{props.resource.data.preview}</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(InstructionCard);
