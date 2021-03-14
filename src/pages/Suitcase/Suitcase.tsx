import React, { Component } from 'react';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimation';
import { styles } from './SuitcaseStyles'; 

function Suitcase({ match }) {
  return (
    <div>
      <h1>BUFFER</h1>
      <div>
        <SuitcaseAnimation classes={styles} match={match} />
      </div>
    </div>
  );
}

export default Suitcase;
