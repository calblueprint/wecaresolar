import React from 'react';
import { Typography } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

interface TopicHeaderProps {
  topicTitle: string;
  articleCount: number;
  videoCount: number;
}

function TopicHeader(props: TopicHeaderProps) {
  const tagsPadding = {
    paddingTop: '10vh',
    paddingBottom: '10px'
  };

  return (
    <div>
      <Typography variant="h1"> {props.topicTitle} </Typography>
      <div style={tagsPadding}>
        <Typography variant="h2">
          <YouTubeIcon fontSize={'small'} />
          {props.articleCount} Article(s)
          <InsertDriveFileOutlinedIcon fontSize={'small'} />
          {props.videoCount} Video(s){' '}
        </Typography>
      </div>
    </div>
  );
}

export default TopicHeader;
