import React, { Component } from 'react';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimation';
import SuitcaseLabeled from '../../components/Images/labeledSuitcase.png'; 
import { styles } from './SuitcaseStyles'; 
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function Suitcase({ match }) {
  const title = { //where can I style this nicer? SuitcaseStyles and App.tsx don't work 
    paddingLeft: '30px',
    display: 'flex',
  };

  const labeled = {
    width: Math.min(window.innerWidth, 800),
    bottom: '10%', 
  }
  const suitcases = {
    padding: '10px'
  }

  const [toggled, setToggle] = React.useState(false); 

  const showLabels = () => {
    setToggle((prev) => !prev); 
  }

  return (
    <div>
      <h1>BUFFER</h1>

      <div style={title}>
        <h1> Suitcase </h1> 
        <FormControlLabel 
          control={ <Switch checked={toggled} onChange={showLabels}/> } 
          label="Labels"
          labelPlacement="start"/>
      </div>
      <div style={suitcases}>
        {toggled? <img src={SuitcaseLabeled} style={labeled}/>
          : <SuitcaseAnimation classes={styles} match={match} />}
      </div>
    </div>
  );
}

export default Suitcase;
