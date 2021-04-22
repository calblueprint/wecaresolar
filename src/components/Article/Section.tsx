import React from 'react';
import { withStyles } from '@material-ui/core';
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
      <Card className={classes.section}>
        <div>
          <div className={classes.labelBox}>
            <text className={classes.labelText}>{section.label}</text>
          </div>
          <div className={classes.title}>
            <Typography variant="h2">{section.title}</Typography>
          </div>
          <div className={classes.text}>
            <Typography variant="body1">{section.text}</Typography>
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <Card className={classes.section}>
        <div>
          <div className={classes.labelBox}>
            <text className={classes.labelText}>{section.label}</text>
          </div>
          <div className={classes.title}>
            <Typography variant="h2">{section.title}</Typography>
          </div>
          <div className={classes.imageDiv}>
            <img className={classes.image} src={section.imageUrl} />
          </div>
          <div className={classes.textImage}>
            <Typography variant="body1">{section.text}</Typography>
          </div>
        </div>
      </Card>
    );
  }
};

export default withStyles(styles)(SectionCard);
