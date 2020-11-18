import React from 'react';
import { makeStyles, createStyles } from "@material-ui/core/styles"

type LabelProps = {
  title: string,
}

const styles = makeStyles(() => createStyles({
  label: {
    padding: "10%",
    // backgroundColor: "#104983",
  }
}))

const Label = ({ title }: LabelProps) => {
  const classes = styles();
  return (
    <div className={classes.label}>
      <p>{title}</p>
    </div>
  )
}

export default Label;