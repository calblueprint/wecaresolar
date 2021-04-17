import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { styles } from './TroubleShootStyles';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { ROOT_ID } from '../../pages/Troubleshoot/Troubleshoot';
import { AnswerOption } from '../../store/troubleshootingSlice';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'; 
import Success from './Success';
import Fail from './Fail'; 


type TroubleShootProps = {
  helpId: string;
  classes: any; 
};

const TroubleShootCard = ({ helpId, classes}) => {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  helpId = decodeURIComponent(helpId);
  const help = troubleshoot[helpId];
  const createRootOptions = (options) => {
    return (
      <div className={classes.optionContainer}>
        {Object.values<AnswerOption>(options).map((option) => {
          return (
            <Link
              to={'/Troubleshoot/' + encodeURIComponent(option.followupId)}
              style={{ textDecoration: 'none' }}
            >
              <div className={classes.optionCard}>
                <div className={classes.optionImage}> </div>
                <div className={classes.optionText}>{option.text}</div>
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
        {Object.values<AnswerOption>(options).map((option) => {
          let buttonType = `${classes.button}`;
          if (option.text == 'yes') {
            buttonType = `${classes.button} ${classes.yes}`;
          } else if (option.text == 'no') {
            buttonType = `${classes.button} ${classes.no}`;
          }
          console.log("Followup ID for option:", option.followupId);
          return (
            <Link
              to={'/Troubleshoot/' + option.followupId}
              style={{ textDecoration: 'none' }}
            >
              <Button className={buttonType}>{option.text}</Button>
            </Link>
          );
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
  }
  
  if (helpId == ROOT_ID) {
    return (
      createRootOptions(helpId.answerOptions) 
    )
    }

    if (help.tag == 'fail') {
      return (
        <Fail/>
      )
    }

    if (help.tag == 'success') {
      return (
        <Success/> 
      )
    }

    else {
      return (
        createOptions(helpId.answerOptions)
      )
    };
     
  // const root = (helpId === ROOT_ID);
  // return createTroubleshootPage(helpId, help)
  };

//   return (
//     <div className={classes.card}>
//       <div className={classes.header}>
//         <HelpOutlineIcon />
//         <p style={{ paddingLeft: '5px' }}>Troubleshooting</p>
//       </div>
//       <h3>{help.question}</h3>
//       <p>{help.description}</p>
//       {root && createRootOptions(help.answerOptions)}
//       {!root && createOptions(help.answerOptions)}
//     </div>
//   );
// };

export default withStyles(styles)(TroubleShootCard);