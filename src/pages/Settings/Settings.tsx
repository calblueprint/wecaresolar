import React, { Component } from 'react';
import SettingsDrawer from '../../components/TabBar/SettingsDrawer';
import { Link } from 'react-router-dom';


function Settings({ match }) {
  return (
    <div>
      <SettingsDrawer />
    </div>
  );
}

export default Settings;
