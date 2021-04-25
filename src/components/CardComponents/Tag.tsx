import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './TagsStyles';
import { Topic } from '../../store/topicsSlice';

interface TagProps {
  tag: string;
  classes: any;
  color: string;
}

const Tag = (props: TagProps) => {
  console.log(props.color);
  const { classes } = props;
  let buttonType = `${classes.tag}`;

  if (props.color == 'Gray') {
    buttonType = `${classes.tag} ${classes.gray}`;
  }

  if (props.color == 'Brown') {
    buttonType = `${classes.tag} ${classes.brown}`;
  }

  if (props.color == 'Red') {
    buttonType = `${classes.tag} ${classes.red}`;
  }

  if (props.color == 'Navy Blue') {
    buttonType = `${classes.tag} ${classes.navyblue}`;
  }

  if (props.color == 'Indigo Blue') {
    buttonType = `${classes.tag} ${classes.indigoblue}`;
  } 

  if (props.color == 'Sky Blue') {
    buttonType = `${classes.tag} ${classes.skyblue}`;
  }
  return <div className={buttonType}>{props.tag}</div>;
};

export default withStyles(styles)(Tag);
