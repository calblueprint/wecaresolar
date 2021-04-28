import React from 'react';

const ProgressBar = (progress: number) => {

  const style = {
    width: '70vw',
    height: '5px',
    background: 'white',
    boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
    borderRadius: '20px',
    marginRight: '0.3rem'
  };

  const fillStyles = {
    width: `${progress}%`,
    height: '5px',
    background: '#33BF68',
    borderRadius: '20px'
  };

  return (
    <div>
      <div style={style}>
        <div style={fillStyles}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
