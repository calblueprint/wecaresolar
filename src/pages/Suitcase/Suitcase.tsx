import React, { Component } from 'react';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimation';
import { styles } from './SuitcaseStyles'; 
import Switch from '@material-ui/core/Switch';


function Suitcase({ match }) {
  const title = { //where can I style this nicer? SuitcaseStyles and App.tsx don't work 
    padding: '30px'
  };

  const [toggle, setToggle] = React.useState(false); 

  return (
    <div>
      <h1>BUFFER</h1>

      <div style={title}>
        <h1> Suitcase </h1> 
        <Switch/>
      </div>

      <div>
        <SuitcaseAnimation classes={styles} match={match} />
      </div>
    </div>
  );
}

export default Suitcase;
