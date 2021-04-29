import React from 'react';
import { Typography } from '@material-ui/core';

const ProgressBar = (progress: number) => {
  const style = {
    display: 'flex',
    flex: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '0rem 0.3rem 0.3rem 0rem'
  };
  const barBase = {
    width: '60vw',
    height: '5px',
    background: 'white',
    boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
    borderRadius: '20px',
    marginRight: '0.3rem'
  };
  const barFill = {
    width: `${progress}%`,
    height: '5px',
    background: '#33BF68',
    borderRadius: '20px'
  };
  const text = {
    color: 'rgba(35, 31, 32, 0.4)'
  };

  return (
    <div style={style}>
      <div style={barBase}>
        <div style={barFill}></div>
      </div>
      <Typography variant="body2" style={text}>
        {progress}% Complete
      </Typography>
    </div>
  );
};

export default ProgressBar;
