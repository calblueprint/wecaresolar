import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';
import { styles } from './PlaylistStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../Cards/StandardCard';
import ProgressBar from './ProgressBar';
import CountTag from '../Count/CountTag'; 

type PlaylistPageProps = {
  lessonId: string;
  classes: any;
};

const PlaylistPage = ({ lessonId, classes }: PlaylistPageProps) => {
  const lessons = useSelector((state: RootState) => state.lessons);
  const resources = useSelector((state: RootState) => state.resources);

  const currentLesson = lessons[lessonId];
  const countMedia = (media: string) =>
    currentLesson.resourceIDs.filter((id) => resources[id].type == media).length;

  const calcProgress = () => {
    const numCompleted = currentLesson.resourceIDs.filter(
      (id) => resources[id].isCompleted
    ).length;
    return Math.round(
      ((numCompleted * 1.0) / currentLesson.resourceIDs.length) * 100
    );
  };

  return (
    <div className={classes.page}>
      <Typography variant="h1" className={classes.title}>
        {currentLesson.title}
      </Typography>
      <div className={classes.summary}>
        <div className={classes.count}>
          <Typography variant="body2" className={classes.countText}>
            <CountTag media={'Article'} count={countMedia('Article')}></CountTag>
          </Typography>
        </div>
        <div className={classes.count}>
          <Typography variant="body2" className={classes.countText}>
            <CountTag media={'Video'} count={countMedia('Video')}></CountTag>
          </Typography>
        </div>
      </div>
      <div className={classes.progressBar}>
        {ProgressBar(calcProgress())}
        <Typography variant="body2" className={classes.countText}>
          {calcProgress()}% Complete
        </Typography>
      </div>
      <Typography variant="body1" className={classes.description}>
        {currentLesson.description}
      </Typography>
      <div className={classes.objBox}>
        <Typography variant="h3" className={classes.subHeader}>
          You will learn:
        </Typography>
        <ol className={classes.objList}>
          {currentLesson.objectives.map((item) => (
            <Typography variant="body1">
              <li className={classes.objective}>{item}</li>
            </Typography>
          ))}
        </ol>
      </div>
      <Typography variant="h3" className={classes.subHeader}>
        Content
      </Typography>
      {currentLesson.resourceIDs.map((id) => {
        if (id in resources) {
          return (
            <StandardCard
              resource={resources[id]}
              resourceID={id}
              completeCheck={true}
              collapsed={resources[id].isCompleted}
            />
          );
        } else {
          return <span />;
        }
      })}
    </div>
  );
};

export default withStyles(styles)(PlaylistPage);
