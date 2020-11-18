import React, {useState} from 'react';
import { Help } from '../store/helpSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import Card from '@material-ui/core/Card';


const TroubleShootCard = () => {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  const [error, setError] = useState('ERROR_MAP');

  const createOptions = (options) => {
    return (
      <div>
        {Object.keys(options).map((option) => {
          if (option == "error_code") {
          } else {
            return <button onClick={() => setError(help.options[option])}>{option}</button>
          }
        })}
        <button onClick={() => setError(help.parent)}>Back</button>
      </div>
    )
  }
  const help = troubleshoot[error];
  return (
    <Card>
      <h3>{help.title}</h3>
      <p>{help.description}</p>
      {createOptions(help.options)}
    </Card>
  );
}

export default TroubleShootCard;