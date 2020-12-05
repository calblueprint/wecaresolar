import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { styles } from './TroubleShootStyles';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

type TroubleShootProps = {
  helpId: string;
  classes: any;
};

const TroubleShootCard = ({ helpId, classes }: TroubleShootProps) => {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  const help = troubleshoot[helpId];
  const root = helpId === 'Root';
  console.log(helpId)
  const createRootOptions = (options) => {
    return (
      <div className={classes.optionContainer}>
        {Object.keys(options).map((option) => {
          return (
            <Link
              to={'/Troubleshoot/' + options[option]}
              style={{ textDecoration: 'none' }}
            >
              <div className={classes.optionCard}>
                <div className={classes.optionImage}> </div>
                <div className={classes.optionText}>{option}</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  const createOptions = (options) => {
    return (
      <div>
        {Object.keys(options).map((option) => {
          if (option == 'error_code') {
          } else {
            let buttonType = `${classes.button}`;
            if (option == 'yes') {
              buttonType = `${classes.button} ${classes.yes}`;
            } else if (option == 'no') {
              buttonType = `${classes.button} ${classes.no}`;
            }
            return (
              <Link
                to={'/Troubleshoot/' + options[option]}
                style={{ textDecoration: 'none' }}
              >
                <Button className={buttonType}>{option}</Button>
              </Link>
            );
          }
        })}
        {help['parent'] ? (
          <Link
            to={'/Troubleshoot/' + help['parent']}
            style={{ textDecoration: 'none' }}
          >
            <Button className={`${classes.button}`}>Back</Button>
          </Link>
        ) : (
          <span />
        )}
      </div>
    );
  };
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <HelpOutlineIcon />
        <p style={{ paddingLeft: '5px' }}>Troubleshooting</p>
      </div>
      <h3>{help.title}</h3>
      <p>{help.description}</p>
      {root && createRootOptions(help.options)}
      {!root && createOptions(help.options)}
    </div>
  );
};

export default withStyles(styles)(TroubleShootCard);