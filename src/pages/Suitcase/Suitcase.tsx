import React from 'react';
import SuitcaseRenderer from '../../components/Suitcase/SuitcaseRenderer';
import SuitcaseLabeled from '../../components/Images/labeledSuitcase.png';
import { styles } from './SuitcaseStyles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import CacheableImage from '../../components/Offline/CacheableImage';

const CustomSwitch = withStyles({
  switchBase: {
    color: grey[400],
    '&$checked': {
      color: grey[500]
    },
    '&$checked + $track': {
      backgroundColor: grey[500]
    }
  },
  checked: {},
  track: {
    backgroundColor: grey[400]
  }
})(Switch);

function Suitcase({ classes, match }) {
  const labeled = {
    width: Math.min(window.innerWidth, 650)
  };

  const [toggled, setToggle] = React.useState(false);

  const handleChange = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h1"> Solar Suitcase </Typography>
        <FormControlLabel
          control={<CustomSwitch checked={toggled} onChange={handleChange} />}
          label={toggled ? 'Labels On' : 'Labels Off'}
          labelPlacement="start"
        />
      </div>
      <div>
        {toggled ? (
          <CacheableImage src={SuitcaseLabeled} style={labeled} />
        ) : (
          <SuitcaseRenderer classes={styles} toggle={toggled} match={match} />
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(Suitcase);
