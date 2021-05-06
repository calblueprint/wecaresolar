import React from 'react';
import { Topic } from '../../store/topicsSlice';
import { styles } from '../../pages/Suitcase/SuitcaseStyles';
import { Card, Typography, withStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';
import CacheableImage from '../Offline/CacheableImage';

type AnimationProps = {
  classes: any;
  topic: Topic;
  exit: any;
  match;
};

function AnimationCard(props: AnimationProps) {
  const { classes, topic } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CacheableImage className={classes.img} src={topic.imageUrl} />
        <div className={classes.rightSide}>
          <Typography variant="h2"> {topic.name} </Typography>
          <Typography variant="body1"> {topic.description} </Typography>
          <div className={classes.buttonsRow}>
            <Link to={`${props.match.url}/${topic.name}`}>
              <button className={classes.manualsButton}>
                <Typography variant="body1"> See All Resources </Typography>{' '}
              </button>
            </Link>
            {/* <Link to={`${props.match.url}/${topic.name}`}> */}
            <button className={classes.helpButton}>
              <Typography variant="body1"> Help </Typography>{' '}
            </button>
            {/* </Link> */}
          </div>
        </div>
        <CancelIcon className={classes.cancel} onClick={props.exit} />
      </Card>
    </div>
  );
}

export default withStyles(styles)(AnimationCard);
