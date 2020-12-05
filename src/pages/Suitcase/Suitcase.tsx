import React, { Component } from 'react';
import TopicCard from '../../components/TopicCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimiation'; 

function Suitcase({ match }) {
  const topics = useSelector((state: RootState) => state.topics);

  return (
    <div>
      {Object.keys(topics).map((key: any) => (
        <Link to={`${match.url}/${key}`}>
          <TopicCard topic={topics[key]} />
        </Link>
      ))}
      <div>
        <SuitcaseAnimation />
      </div>
    </div>
  );
}

export default Suitcase; 
