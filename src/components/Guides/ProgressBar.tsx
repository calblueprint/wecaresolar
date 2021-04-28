import React from 'react';

const ProgressBar = (progress: number, page: string) => {
  const playlist = {
    width: '200px',
    height: '5px',
    background: 'white',
    boxShadow: '-2px 4px 20px rgba(79, 42, 29, 0.15)',
    borderRadius: '20px',
    marginRight: '0.3rem'
  };

  const article = {
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

  if (page == 'playlist') {
    return (
      <div>
        <div style={playlist}>
          <div style={fillStyles}></div>
        </div>
      </div>
    );
  } else if (page == 'article') {
    return (
      <div>
        <div style={article}>
          <div style={fillStyles}></div>
        </div>
      </div>
    );
  }
};

export default ProgressBar;
