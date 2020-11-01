import React, { Component } from 'react';
import TopicCard from '../components/TopicCard'; 
import TopicViews from '../components/TopicViews'; 
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Link } from 'react-router-dom';
import { Topic } from '../store/topicsSlice';

const topicRes: Topic = {
  name: 'Fetal Doppler',
  description: 'This is the Fetal Doppler topic.',
  url:
    'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
  isFinished: false
};

function Suitcase({ match }) {
  const topics = useSelector((state: RootState) => state.topics); 
  console.log('match', match); 

  return (
    <div>
      {Object.keys(topics).map((key: any) => (
        <Link to={`${match.url}/${key}`}>
          <TopicCard topic={topics[key]} />
        </Link>
      ))}
    </div>
  ); 
}

export default Suitcase; 
