import React from 'react';

interface TopicHeaderProps {
    topicTitle: string; 
    articleCount: number; 
    videoCount: number; 
}

function TopicHeader(props : TopicHeaderProps) {
    return (
        <div>
            <h1>{props.topicTitle}</h1>
            <h3>{props.articleCount} Article(s) {props.videoCount} Video(s)</h3>
        </div>
    ); 
}


export default TopicHeader; 

//another child of TopicView 
//count inside of TopicView 
//View is whole page - we'd want to render the header on top of the view 