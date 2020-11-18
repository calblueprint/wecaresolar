import React from 'react';
import { Help } from '../store/helpSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import Card from '@material-ui/core/Card';

type TroubleShootProps = {
  help: Help,
}

const TroubleShootCard = ({ help }: TroubleShootProps) => {
  const troubleshoot = useSelector((state: RootState) => state.troubleshoot);
  const createOptions = (options) => {
    return (
      <div>
        {Object.keys(options).map((option) => {
          if (option == "error_code") {
          } else {
            return <button onClick={() => (troubleshoot[options["option"]])}>{option}</button>
          }
        })}
        <button onClick={() => (troubleshoot[options["parent"]])}></button>
      </div>
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