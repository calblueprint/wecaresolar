import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { styles } from './TroubleShootStyles';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Fail({ match }) {
    return (
      <div>
        <h1>Fail</h1>
      </div>
    );
  }


  export default Fail; 
