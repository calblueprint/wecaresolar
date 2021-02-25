import React, { Component } from 'react';
// import TopicCard from '../../components/TopicCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimation';

function Suitcase({ match }) {
  return (
    <div>
      <h1>BUFFER</h1>
      <div>
        <SuitcaseAnimation match={match} />
      </div>
    </div>
  );
}

export default Suitcase;
