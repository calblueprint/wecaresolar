import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { styles } from './TroubleShootStyles';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

type TroubleShootProps = {
    classes: any; 
  };

const Fail = ({ classes}: TroubleShootProps) => {
    // const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
    // const help = troubleshoot[helpId];
    // console.log(helpId);
    return (
        <div>
        <h1> Smth </h1>
        <div className = {classes.fail_div1}>
            <div className={classes.header_fail}>
                <HelpOutlineIcon />
                <p style={{ paddingLeft: '5px'}}>Troubleshooting</p>
            </div>
            <h2 style={{marginLeft: '60px'}}> Sorry, we cannot fix it here. </h2> 
            {/* <p>{help.description}</p> */}
            <h3 style={{marginLeft: '60px'}}> If you need immediate assistance </h3>
            <p style={{marginLeft: '60px'}}> Call the number on the Solar Suitcase sticker. This should connect you to a local technician who may be able to help. </p>
        </div>
        <div style={{margin:'20px'}}> 
        </div> 
        <div className = {classes.success_div2}>
            <Link to={'/Troubleshoot'} style={{ textDecoration: 'none' }}>
                <Button className={classes.button_back}>Report a problem</Button>
            </Link>
            <Link to={'/Troubleshoot'} style={{ textDecoration: 'none' }}>
                <Button className={classes.button_restart}>Restart troubleshooting</Button>
            </Link>
        </div> 
        </div> 
        );
};


export default withStyles(styles)(Fail); 
