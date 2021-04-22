import { Typography } from '@material-ui/core';
import React from 'react';

interface TopicHeaderProps {
  topicTitle: string;
  articleCount: number;
  videoCount: number;
}

function TopicHeader(props: TopicHeaderProps) {
  const tagsPadding = {
    paddingTop: '10vh'
  };

  return (
    <div>
      <Typography variant="h1"> {props.topicTitle} </Typography>
      <div style={tagsPadding}>
        <Typography variant="h2">
          {' '}
          {props.articleCount} Article(s) {props.videoCount} Video(s){' '}
        </Typography>
      </div>
    </div>
  );
}

export default TopicHeader;
