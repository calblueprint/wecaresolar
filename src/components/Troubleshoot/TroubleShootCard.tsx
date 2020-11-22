import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import Card from '@material-ui/core/Card';

type TroubleShootProps = {
  helpId: string,
}

const TroubleShootCard = ({ helpId }: TroubleShootProps) => {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  const help = troubleshoot[helpId];
  const createOptions = (options) => {
    return (
      <div>
        {Object.keys(options).map((option) => {
          if (option == "error_code") {
          } else {
            return <Link to={'/Troubleshoot/' + options[option]}><button>{option}</button></Link>
          }
        })}
        {help['parent'] ? <Link to={'/Troubleshoot/' + help['parent']}><button>Back</button></Link> : <span />
        }
      </div >
    )
  }
  return (
    <Card>
      <h3>{help.title}</h3>
      <p>{help.description}</p>
      {createOptions(help.options)}
    </Card>
  );
}

export default TroubleShootCard;