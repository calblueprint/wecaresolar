import React, { Component } from 'react';
import TopicViews from '../components/TopicViews';
import { Topic } from '../store/topicsSlice';

const topicRes: Topic = {
  name: 'Battery Charger',
  description: 'This is the Fetal Doppler topic.',
  url:
    'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  isFinished: false
};

export default class Suitcase extends Component {
  render() {
    return (
      <div>
        <TopicViews topic={topicRes} />
      </div>
    );
  }
}
