import React from 'react';
import { Lesson } from '../../store/lessonsSlice';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './PlaylistStyles';

interface PlaylistCardProps {
  lesson: Lesson,
  classes: any
}

interface TagProps {
  tag: string,
  classes: any
}


const PlaylistCard = (props: PlaylistCardProps) => {
  const { classes } = props;
  const lesson = props.lesson;
  return (
    <Card className={classes.card}>
      <h3 className={classes.title} style={{ textDecoration: 'none' }}>{lesson.title}</h3>
      <div>
        {lesson.objectives.map(tag => <Tag classes={classes} tag={tag}/>)}
      </div>
      <p>{lesson.description}</p>
    </Card>
  );
}

const Tag = (props: TagProps) => {
  const { classes } = props;

  return (
  <div className={classes.lightsTag}>{props.tag}</div>
  );
}

export default withStyles(styles)(PlaylistCard);

