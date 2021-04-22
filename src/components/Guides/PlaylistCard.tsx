import React from 'react';
import Tag from '../CardComponents/Tag';
import { Lesson } from '../../store/lessonsSlice';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './PlaylistCardStyles';
import { ReactComponent as InstructionIcon } from './InstructionIcon.svg';
import { ReactComponent as VideoIcon } from './VideoIcon.svg';

interface PlaylistCardProps {
  lesson: Lesson;
  classes: any;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  const { classes } = props;
  const lesson = props.lesson;

  const resources = useSelector((state: RootState) => state.resources);
  const countMedia = (media: string) =>
    lesson.resourceIDs.filter(id => resources[id].type == media).length;

  const numVideos = countMedia('Video');
  const numArticles = countMedia('Article');

  return (
    <Card className={classes.card}>
      <h2 className={classes.title}>{lesson.title}</h2>
      <div className={classes.spread}>
        <div className={classes.column}>
          {lesson.objectives.map(tag => (
            <Tag tag={tag} />
          ))}
        </div>
        <div className={classes.column}>
          <div className={classes.icon}>
            <InstructionIcon />
            <div>&nbsp;{numArticles}</div>
          </div>
          <div className={classes.icon}>
            <VideoIcon />
            <div>&nbsp;{numVideos}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(PlaylistCard);
