import React from 'react';
import Tag from './Tag';
import { Lesson } from '../../store/lessonsSlice';
import Card from '@material-ui/core/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './PlaylistStyles';

interface PlaylistCardProps {
  lesson: Lesson;
  classes: any;
}

const PlaylistCard = (props: PlaylistCardProps) => {
  const { classes } = props;
  const lesson = props.lesson;

  const resources = useSelector((state: RootState) => state.resources);
  const countMedia = (media: string) =>
    lesson.resourceIds.filter((id) => resources[id].type == media).length;

  const numVideos = countMedia('Video');
  const numArticles = countMedia('Article');

  return (
    <Card className={classes.card}>
      <h2 className={classes.title}>
        {lesson.title}
      </h2>
      <div className={classes.spread}>
        <div className={classes.column}>
          {lesson.objectives.map((tag) => (
            <Tag classes={classes} tag={tag} />
          ))}
        </div>
        <div className={classes.column}>
          <div className={classes.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
            <div>&nbsp;{numArticles}</div>
          </div>
          <div className={classes.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            <div>&nbsp;{numVideos}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(PlaylistCard);
