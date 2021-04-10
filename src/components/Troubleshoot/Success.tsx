import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { styles } from './TroubleShootStyles';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'; 


type TroubleShootProps = {
    classes: any;
  };

const Success = ({classes}: TroubleShootProps) => {
    return (
        <div>
        <h1> Smth </h1>
        <div className = {classes.success_div1}>
            <div className={classes.header_sucess}>
                <CheckCircleOutlineIcon />
                <p style={{ paddingLeft: '5px'}}>Success</p>
            </div>
            <h2 style={{marginLeft: '60px'}}> Great! </h2> 
            <p style={{marginLeft: '60px'}}> We are glad we were able to help. </p>
        </div>
        <div style={{margin:'20px'}}> 
        </div> 
        <div className = {classes.success_div2}>
            <Link to={'/Troubleshoot'} style={{ textDecoration: 'none' }}>
                <Button className={classes.button_back}>Back to suitcase</Button>
            </Link>
            <Link to={'/Troubleshoot'} style={{ textDecoration: 'none' }}>
                <Button className={classes.button_restart}>Restart troubleshooting</Button>
            </Link>
        </div> 
        </div> 
        );
};


export default withStyles(styles)(Success); 
