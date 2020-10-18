import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';


type LabelProps = {
  title?: string,
  icon?: SvgIconProps,
}

const Label = ({ title, icon }: LabelProps) => {
  return (
    <div>
      <p>{title}</p>
      {icon}
    </div>
  )
}

export default Label;