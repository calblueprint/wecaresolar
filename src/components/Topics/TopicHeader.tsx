import React from 'react';
import { Typography } from '@material-ui/core';
import CountTag from '../CardComponents/Count/CountTag';
import { styles } from './TopicStyles';
import { withStyles } from '@material-ui/core';

interface TopicHeaderProps {
  classes: any;
  topicTitle: string;
  articleCount: number;
  videoCount: number;
}

function TopicHeader(props: TopicHeaderProps) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h1"> {props.topicTitle} </Typography>
      <div>
        <Typography variant="subtitle1" className={classes.tags}>
          <CountTag media={'Article'} count={props.articleCount}></CountTag>
          <CountTag media={'Video'} count={props.videoCount}></CountTag>
        </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(TopicHeader);
