import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './SectionStyles';

type SectionProps = {
    section: any,
    classes?: any,
}

const Section = ({ section, classes}: SectionProps): typeof Section => {
    return (
        <div className={classes.section}>
            <div className={classes.labelBox}>
                <text className={classes.labelText}>{section.label}</text>
            </div>
            <div className={classes.title}>
                    {section.title}
            </div>
            <div>
                <img className={classes.image} src ={section.imageUrl}></img>
            </div>
            <div>
                <text className={classes.text}>{section.text}</text>
            </div>
        </div>
    );
}

export default withStyles(styles)(Section);