import React from 'react';
import { Typography } from '@material-ui/core';
import CountTag from '../Count/CountTag';
import theme from '../../CustomStyles';

interface TopicHeaderProps {
  topicTitle: string;
  articleCount: number;
  videoCount: number;
}

function TopicHeader(props: TopicHeaderProps) {
  const tagsPadding = {
    display: 'flex',
    padding: theme.spacing('10vh', 1, 1, 1)
  };

  return (
    <div>
      <Typography variant="h1"> {props.topicTitle} </Typography>
      <div>
        <Typography variant="subtitle1" style={tagsPadding}>
          <CountTag media={'Article'} count={props.articleCount}></CountTag>
          <CountTag media={'Video'} count={props.videoCount}></CountTag>
        </Typography>
      </div>
    </div>
  );
}

export default TopicHeader;
