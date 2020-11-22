import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ResourceStyles';
import { Resource } from '../../store/resourcesSlice';

interface ResourceCardProps {
  resource: Resource;
  classes: any;
}

const ResourceCard = (props: ResourceCardProps) => {
  const { classes } = props;
  const resource = props.resource;

  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{resource.title}</h3>
      <text className={classes.text}>{resource.data.preview}</text>
    </Card>
  );
};

export default withStyles(styles)(ResourceCard);
