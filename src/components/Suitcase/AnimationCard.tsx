import React from 'react';
import { Card, withStyles } from '@material-ui/core';
import { styles } from './AnimationCardStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';


type AnimationProps = {
    classes: any;
    resourceId: number; 
    match 
  }


function AnimationCard(props : AnimationProps) {
    const { classes } = props; 
    const currentTopic = useSelector((state: RootState) => state.topics[props.resourceId]); //retrieves an object, not the key value 

    return (
      <div>
          <Card className={classes.card}>
            <img src={currentTopic.imageUrl}  width={150} height={130} />
            <div className={classes.rightSide}>
                <h2> {currentTopic.name} </h2>
                <text>{currentTopic.description}</text>
                <div className={classes.buttons}>
                    <Link to={`${props.match.url}/${props.resourceId}`}>
                        <button className={classes.manuals}> 
                            See All Manuals 
                        </button>
                    </Link> 
                    <button className={classes.help}> Help </button>
                </div>
            </div>
        </Card>
      </div>
    );
  }

export default withStyles(styles)(AnimationCard);
  
