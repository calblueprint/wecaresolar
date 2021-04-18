import React from 'react';
import { Link, matchPath } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { styles } from './TroubleShootStyles';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { ROOT_ID } from '../../pages/Troubleshoot/Troubleshoot';
import { AnswerOption } from '../../store/troubleshootingSlice';

type TroubleShootProps = {
  helpId: string;
  classes: any;
};

const TroubleShootCard = ({ helpId, classes }: TroubleShootProps) => {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  helpId = decodeURIComponent(helpId);
  const help = troubleshoot[helpId];

  const createOptions = (options) => {
    return (
      <div>
        {Object.values<AnswerOption>(options).map((option) => {
          let buttonType = `${classes.button}`;
          if (option.text == 'yes') {
            buttonType = `${classes.button} ${classes.yes}`;
          } else if (option.text == 'no') {
            buttonType = `${classes.button} ${classes.no}`;
          }

          const button = <Button className={buttonType}>{option.text}</Button>;
          if (option.triggerUrl && option.triggerUrl[0] != '/') {
            // For redirects to external URLs
            return (
              <a href={option.triggerUrl} target='_blank'>
                {button}
              </a>
            );
          } else {
            // For redirects to other pages within the app,
            // or if we should stay in the troubleshooting flow and ask another question instead
            return (
              <Link
                to={option.triggerUrl || '/Troubleshoot/' + encodeURIComponent(option.followupId || "")}
                style={{ textDecoration: 'none' }}
              >
                {button}
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
      <h3>{help.question}</h3>
      <p>{help.description}</p>
      {createOptions(help.answerOptions)}
    </div>
  );
};

export default withStyles(styles)(TroubleShootCard);