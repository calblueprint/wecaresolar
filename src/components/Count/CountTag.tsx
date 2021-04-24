import { Typography } from '@material-ui/core';
import React from 'react';
import { ReactComponent as InstructionIcon } from './InstructionIcon.svg';
import { ReactComponent as PlaylistIcon } from './PlaylistIcon.svg';
import { ReactComponent as VideoIcon } from './VideoIcon.svg';

interface countProps {
  media: string; //Article, Video, or Playlist
  count: number; 
}

const CountTag = ({media, count} : countProps) => {
  const tag = {
    display: 'flex',
    alignItems: 'center'
  };

  function mediaRender (text, icon) {
    return (
      <div style={tag}>
        {icon} <Typography variant="subtitle1"> {count} {text} </Typography>
      </div> 
    )
  }

  return (
    <div>
      {media == 'Article'?  mediaRender('Article(s)', <InstructionIcon/>) : null} 
      {media == 'Video'?  mediaRender('Video(s)', <VideoIcon/>) : null} 
      {media == 'Playlist'?  mediaRender('Playlist(s)', <PlaylistIcon/>) : null} 
    </div>
  )
}

export default CountTag;
