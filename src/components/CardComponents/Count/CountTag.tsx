import React from 'react';
import { ReactComponent as InstructionIcon } from './InstructionIcon.svg';
import { ReactComponent as PlaylistIcon } from './PlaylistIcon.svg';
import { ReactComponent as VideoIcon } from './VideoIcon.svg';
import { resourceTypes } from '../../../resourceTypes';
interface countProps {
  media: string; //Article, Video, or Playlist
  count: number;
}

const CountTag = ({ media, count }: countProps) => {
  const tag = {
    display: 'flex',
    alignItems: 'center'
  };
  const iconPadding = {
    paddingLeft: 5,
    paddingRight: 5
  };

  function mediaRender(text, icon) {
    return (
      <div style={tag}>
        {icon}
        <div style={iconPadding}>
          {count} {text}
          {count === 1 ? null : 's'}
        </div>
      </div>
    );
  }

  return (
    <div>
      {media == resourceTypes.INSTRUCTION
        ? mediaRender(resourceTypes.INSTRUCTION, <InstructionIcon />)
        : null}
      {media == resourceTypes.VIDEO
        ? mediaRender(resourceTypes.VIDEO, <VideoIcon />)
        : null}
      {media == resourceTypes.PLAYLIST
        ? mediaRender(resourceTypes.PLAYLIST, <PlaylistIcon />)
        : null}
    </div>
  );
};

export default CountTag;
