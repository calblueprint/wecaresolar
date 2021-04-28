import { Grid, Typography, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { isInstruction } from '../../store/resourcesSlice';
import ProgressBar from '../Guides/ProgressBar';
import { styles } from './InstructionStyles';
import SectionCard from './Section';

type InstructionProps = {
  resId: string;
  classes: any;
};

const Instruction = ({ resId, classes }: InstructionProps): typeof Instruction => {
  const resources = useSelector((state: RootState) => state.resources);
  const instruction = resources[resId];
  const sections = useSelector((state: RootState) => state.sections);

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isInstruction(instruction.data)) {
    const instructionSections = instruction.data.sections;
    return (
      <div>
        <div className={classes.fixed}>
          <div className={classes.title}>
            <Typography variant="h1">{instruction.title}</Typography>
          </div>
          <div className={classes.progressBar}>
            {ProgressBar(scrollTop)}
          </div>
          <div className={classes.progressText}>
            <Typography variant="h3">
              {Math.round(scrollTop)} % Complete
            </Typography>
          </div>
        </div>
        <div className={classes.sections}>
          {instructionSections.map((key: any) => (
            <SectionCard section={sections[key]}></SectionCard>
          ))}
        </div>
      </div>
    );
  }
};
export default withStyles(styles)(Instruction);
