import React from 'react';
import { CardContent, withStyles } from '@material-ui/core';
import { styles } from './SectionStyles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Section } from '../../store/sectionsSlice';

type SectionProps = {
  section: Section;
  classes?: any;
};

const SectionCard = ({
  section,
  classes
}: SectionProps): typeof SectionCard => {
  if (section.imageUrl == null) {
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.labelBox}>{section.label}</div>
          <Typography variant="h2" className={classes.title}>
            {section.title}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {section.text}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.labelBox}>
            <text className={classes.labelText}>{section.label}</text>
          </div>
          <Typography variant="h2" className={classes.title}>
            {section.title}
          </Typography>
          <div className={classes.imageDiv}>
            <img src={section.imageUrl} className={classes.image}></img>
          </div>
          <Typography variant="body1" className={classes.text}>
            {section.text}
          </Typography>
        </CardContent>
      </Card>
    );
  }
};

export default withStyles(styles)(SectionCard);
