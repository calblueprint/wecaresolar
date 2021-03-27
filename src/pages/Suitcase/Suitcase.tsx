import React, { Component } from 'react';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimation';
import { styles } from './SuitcaseStyles'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers'; 
import { ControlPointDuplicateRounded } from '@material-ui/icons';

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
