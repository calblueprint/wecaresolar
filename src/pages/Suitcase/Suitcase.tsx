import React from 'react';
import SuitcaseAnimation from '../../components/Suitcase/SuitcaseAnimation';
import SuitcaseLabeled from '../../components/Images/labeledSuitcase.png';
import { styles } from './SuitcaseStyles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import classes from '*.module.css';

const CustomSwitch = withStyles({
  switchBase: {
    color: red[700],
    '&$checked': {
      color: green[600]
    },
    '&$checked + $track': {
      backgroundColor: green[500]
    }
  },
  checked: {},
  track: {
    backgroundColor: red[800]
  }
})(Switch);

function Suitcase({ classes, match }) {
  const title = {
    paddingLeft: '30px',
    paddingRight: '30px',
    display: 'flex',
    justifyContent: 'space-between'
  };

  const tap = {
    paddingLeft: '30px',
    paddingRight: '30px'
  };

  const labeled = {
    width: Math.min(window.innerWidth, 650)
  };

  const [toggled, setToggle] = React.useState(false);

  const showLabels = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h1"> Suitcase </Typography>
        <FormControlLabel
          control={<CustomSwitch checked={toggled} onChange={showLabels} />}
          label="Labels"
          labelPlacement="start"
        />
      </div>
      <div className={classes.tap}>
        <Typography variant="body1">
          {' '}
          Tap on a part of the Solar Suitcase{' '}
        </Typography>
      </div>
      <div>
        {toggled ? (
          <img src={SuitcaseLabeled} style={labeled} />
        ) : (
          <SuitcaseAnimation classes={styles} match={match} />
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(Suitcase);
