import React, { useState } from 'react';
import SyncIcon from '@material-ui/icons/Sync';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import { FetchStatus } from '../store/loadInitialState';

interface RefreshButtonProps {
  fetch: () => Promise<FetchStatus>
}

enum RefreshStatus {
  Default = 0,
  FetchFailed,
  Fetching,
  FetchComplete,
}

const RefreshButton = ({ fetch }: RefreshButtonProps) => {
  const [status, setStatus] = useState(RefreshStatus.Default);

  const onFetch = async () => {
    setStatus(RefreshStatus.Fetching);
    const result = await fetch();
    if (result === FetchStatus.SuccessFromServer) {
      setStatus(RefreshStatus.FetchComplete);
      setTimeout(() => setStatus(RefreshStatus.Default), 2000);
    }
    else {
      setStatus(RefreshStatus.FetchFailed);
    }
  }

  return (<div style={{width: '25px'}}>
    {(() => {
      if (status === RefreshStatus.Default) {
        return <SyncIcon onClick={onFetch} />;
      }
      else if (status === RefreshStatus.FetchFailed) {
        return <SyncProblemIcon onClick={onFetch} />;
      }
      else if (status === RefreshStatus.Fetching) {
        return <CircularProgress color="inherit" />;
      }
      else {
        return <CheckIcon />;
      }
    })()}
  </div>)
}


export default RefreshButton;