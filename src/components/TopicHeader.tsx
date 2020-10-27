import React from 'react';
import { Resource } from '../store/resourcesSlice';

interface TopicHeaderProps {
    image: string; 
    articleCount: number; 
    videoCount: number; 
}
//how do I inherit the topic name and image props from TopicCard component? 

function TopicHeader(props : TopicHeaderProps) {
    return (
        <div></div>
    ); 
}


export default TopicHeader; 