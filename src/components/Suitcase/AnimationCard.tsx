import React from 'react';
import { useSelector } from 'react-redux';
import { Topic } from '../../store/topicsSlice';

import { styles } from '../../pages/Suitcase/SuitcaseStyles'; 
import { Card, withStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

import { Link } from 'react-router-dom';

type AnimationProps = {
    classes: any, 
    topic: Topic, 
    exit: any, 
    match 
}

function AnimationCard(props : AnimationProps) {
    const { classes, topic } = props;

    
    return (
        <div> 
            <Card className={classes.card}>
            <img className={classes.img} src={topic.imageUrl} />
            <div className={classes.rightSide}>
                <h2> {topic.name} </h2>
                <p> {topic.description} </p>
                <div className={classes.buttonsRow}>
                    <Link to={`${props.match.url}/${topic.name}`}>
                        <button className={classes.manualsButton}> See All Manuals </button>
                    </Link> 
                        <button className={classes.helpButton}> Help </button>
                </div>
            </div>
            <CancelIcon className={classes.cancel} onClick={props.exit} /> 
        </Card>
        </div>
    )
}

export default withStyles(styles)(AnimationCard); 