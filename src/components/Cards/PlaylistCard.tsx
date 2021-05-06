import React from 'react';
import Tag from '../CardComponents/Tag';
import { Lesson } from '../../store/lessonsSlice';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './PlaylistCardStyles';
import { ReactComponent as InstructionIcon } from '../CardComponents/Count/InstructionIcon.svg';
import { ReactComponent as VideoIcon } from '../CardComponents/Count/VideoIcon.svg';
import { Topic } from '../../store/topicsSlice';

interface PlaylistCardProps {
  lesson: Lesson;
  classes: any;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  const { classes } = props;
  const lesson = props.lesson;

  const resources = useSelector((state: RootState) => state.resources);
  const topics = useSelector((state: RootState) => state.topics);
  const countMedia = (media: string) =>
    lesson.resourceIDs.filter((id) => {
      if (!resources[id]) {
        console.log(
          `[countMedia] Error: Could not find resource "${resources[id]}" in playlist "${lesson.title}"`
        );
      }
      return resources[id].type == media;
    }).length;

  const numVideos = countMedia('Video');
  const numArticles = countMedia('Article');
  const mySet = new Set<Topic>();
  lesson.resourceIDs.map((resID) =>
    resources[resID].tags.map((tag) => mySet.add(topics[tag]))
  );

  return (
    <Card className={classes.card}>
      <Typography variant="h3">{lesson.title}</Typography>
      <div className={classes.spread}>
        <div className={classes.column}>
          {Array.from<Topic>(mySet)
            .slice(0, 3)
            .map((topic: Topic) => (
              <Tag tag={topic.name} color={topic.color} />
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
