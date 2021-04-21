/**
 * A general-purpose refresh button that allows the user to get the most up-to-date data from the server.
 *
 * This component takes in a single required prop, `fetch` (a function), which can do anything
 * as long as it returns a Promise that resolves with a FetchStatus to indicate its result.
 *
 * The component will then automatically display the status of the fetch:
 * - Default refresh icon if nothing happened
 * - Loading wheel when fetching
 * - Checkmark when fetch succeeds (switches back to refresh icon afterwards)
 * - Failed refresh icon if something goes wrong
 */

import React, { useState } from 'react';
import SyncIcon from '@material-ui/icons/Sync';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import { FetchStatus } from '../store/loadInitialState';

interface RefreshButtonProps {
  fetch: () => Promise<FetchStatus>;
  successDisplayTime?: number;
}

enum RefreshStatus {
  Default = 0,
  FetchFailed,
  Fetching,
  FetchComplete
}

const RefreshButton = ({
  fetch,
  successDisplayTime = 2000
}: RefreshButtonProps) => {
  const [status, setStatus] = useState(RefreshStatus.Default);

  const onFetch = async () => {
    setStatus(RefreshStatus.Fetching);
    const result = await fetch();
    if (result === FetchStatus.SuccessFromServer) {
      setStatus(RefreshStatus.FetchComplete);
      setTimeout(() => setStatus(RefreshStatus.Default), successDisplayTime);
    } else {
      setStatus(RefreshStatus.FetchFailed);
    }
  };

  return (
    <div style={{ width: '25px' }}>
      {(() => {
        if (status === RefreshStatus.Default) {
          return <SyncIcon onClick={onFetch} />;
        } else if (status === RefreshStatus.FetchFailed) {
          return <SyncProblemIcon onClick={onFetch} />;
        } else if (status === RefreshStatus.Fetching) {
          return <CircularProgress color="inherit" />;
        } else {
          return <CheckIcon />;
        }
      })()}
    </div>
  );
};

export default RefreshButton;
