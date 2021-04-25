import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './TagsStyles';
import { Topic } from '../../store/topicsSlice';

interface TagProps {
  name: string;
  //tag: string; 
  classes: any;
  color: string; 
}

const Tag = (props: TagProps) => {
  console.log(props.color)
  const { classes } = props;
  let buttonType = `${classes.tag}`; 

  if (props.color == "Gray") {
    buttonType  = `${classes.tag} ${classes.brown}`;
  }

  if (props.color == "Brown") {
    buttonType  = `${classes.tag} ${classes.brown}`;
  } 

  if (props.color == "Red") {
    buttonType  = `${classes.tag} ${classes.red}`;
  } 

  if (props.color == "Navy Blue") {
    buttonType  = `${classes.tag} ${classes.navyblue}`;
  }  
 

  // let buttonType = `${classes.tag}`; 

  // {Object.values<Topics>(colors).map((option) => {
  // if (option.color == "Grey") {
  //   buttonType = 
  // 


  return <div className={buttonType}>{props.name}</div>;
};

export default withStyles(styles)(Tag);
