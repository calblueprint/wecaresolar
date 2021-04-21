import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './TagsStyles';

interface TagProps {
  tag: string;
  classes: any;
}

const Tag = (props: TagProps) => {
  const { classes } = props;
  const category =
    props.tag === 'Lights'
      ? classes.lights
      : props.tag === 'Rechargable Headlamps'
      ? classes.headlamps
      : props.tag === 'Suitcase'
      ? classes.suitcase
      : classes.defaultTag;
  return <div className={`${classes.tag} ${category}`}>{props.tag}</div>;
};

export default withStyles(styles)(Tag);
