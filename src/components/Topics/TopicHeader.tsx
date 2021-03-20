import React from 'react';

interface TopicHeaderProps {
  topicTitle: string;
  articleCount: number;
  videoCount: number;
}


function TopicHeader(props: TopicHeaderProps) {
  const tags = {
    paddingTop: '30px'
  };

  return (
    <div>
      <h1>{props.topicTitle}</h1>
      <div style={tags}>
      <h3>
        {props.articleCount} Article(s) {props.videoCount} Video(s)
      </h3>
      </div>
    </div>
  );
}

export default TopicHeader;

//another child of TopicView
//count inside of TopicView
//View is whole page - we'd want to render the header on top of the view
