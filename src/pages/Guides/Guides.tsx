import React from 'react';
import PlaylistCard from '../../components/Playlist/PlaylistCard';
import TopicCard from '../../components/Cards/TopicCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import { styles } from './GuidesStyles';

type GuidesProps = {
  classes: any;
  match
}


function Guides(props: GuidesProps) {
  const lessons = useSelector((state: RootState) => state.lessons);
  const topics = useSelector((state: RootState) => state.topics)
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>Playlists</div>
        <a>See All</a>
      </div>
      <div className={classes.scroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link style={{textDecoration: 'none'}} to={`${props.match.url}/${key}`}>
          <div className={classes.playlistCard}>
            <PlaylistCard lesson={lessons[key]} />
          </div>
        </Link>
        ))}
      </div>
      
      <div className={classes.header}>
        <div className={classes.title}>Topics</div>
        <a>See All</a>
      </div>
      <div className={classes.scroll}>
        {Object.keys(topics).map((key: any) => (
          <Link to={`${props.match.url}/topic/${key}`}>
            <div className={classes.topicCard}>
              <TopicCard topic={topics[key]} />
            </div>
            </Link>
        ))}
      </div>
    </div>
        )}

export default withStyles(styles)(Guides);