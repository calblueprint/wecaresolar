import React from 'react';
import { CardContent, withStyles } from '@material-ui/core';
import { styles } from './SectionStyles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Section } from '../../store/sectionsSlice';
import CacheableImage from '../Offline/CacheableImage';

type SectionProps = {
  section: Section;
  classes?: any;
};

const SectionCard = ({
  section,
  classes
}: SectionProps): typeof SectionCard => {
  function renderImage() {
    if (section.imageUrl != null) {
      return (
        <div className={classes.imageDiv}>
          <CacheableImage
            src={section.imageUrl}
            className={classes.image}
          ></CacheableImage>
        </div>
      );
    }
  }

  function renderLabel() {
    if (section.label != null) {
      return (
        <div className={classes.labelBox}>
          <Typography variant="body1">{section.label}</Typography>
        </div>
      );
    }
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        {renderLabel()}
        <Typography variant="h2" className={classes.title}>
          {section.title}
        </Typography>
        {renderImage()}
        <Typography variant="body1" className={classes.text}>
          {section.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(SectionCard);
