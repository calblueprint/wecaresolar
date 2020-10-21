import React, { Component } from 'react';
import TopicCard from '../components/topicCard/topicCard';
import VideoCard from '../components/videoCard/videoCard';
import ArticleCard from '../components/articleCard/articleCard';

export default class Guides extends Component {
  render() {
    return <div>
      <TopicCard/>
      <ArticleCard/>
      <VideoCard/>
    </div>
  }
}