import React from 'react';
import { Typography } from '@material-ui/core';
import CountTag from '../Count/CountTag'; 
import YouTubeIcon from '@material-ui/icons/YouTube';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

interface TopicHeaderProps {
  topicTitle: string;
  articleCount: number;
  videoCount: number;
}

function TopicHeader(props: TopicHeaderProps) {
  const tagsPadding = {
    display: 'flex',
    paddingTop: '10vh',
    paddingBottom: '10px'
  };

  return (
    <div>

      <Typography variant="h1"> {props.topicTitle} </Typography>
      <div style={tagsPadding}>
        <CountTag media={'Article'} count={props.articleCount} ></CountTag>
        <CountTag media={'Video'} count={props.videoCount} ></CountTag>
      </div>
    </div>
  );
}

export default TopicHeader;
