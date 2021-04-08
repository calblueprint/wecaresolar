import React from 'react';
import { styles } from '../../pages/Suitcase/SuitcaseStyles'; 
import { Card, withStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';

type AnimationProps = {
    classes: any, 
    topic: string, 
    exit: any, 
    match 
}

function AnimationCard(props : AnimationProps) {
    const { classes } = props; 
    const currentTopic = useSelector((state: RootState) => state.topics[props.topic]) //retrieves topic object

    // console.log(useSelector((state: RootState) => state.topics))
    // console.log(props.topic)

    return (
        <div> 
            <Card className={classes.card}>
            <img className={classes.img} src={currentTopic.imageUrl} />
            <div className={classes.rightSide}>
                <h2> {currentTopic.name} </h2>
                <p> {currentTopic.description} </p>
                <div className={classes.buttons}>
                    <Link to={`${props.match.url}/${props.topic}`}>
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