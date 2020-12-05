import React from 'react';
import PlaylistCard from '../../components/Guides/PlaylistCard';
import ResourceCard from '../../components/Guides/ResourceCard'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import { styles } from './GuidesStyles';
import Video from '../../components/Video/Video'
import { isVideo } from '../../store/resourcesSlice'

type GuidesProps = {
  classes: any;
  match
}


function Guides(props: GuidesProps) {
  const lessons = useSelector((state: RootState) => state.lessons);
  const resources = useSelector((state: RootState) => state.resources);
  const articles = Object.keys(resources).filter((id) => resources[id].type == 'Article');
  const videos = Object.keys(resources).filter((id) => resources[id].type == 'Video');

  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>Playlists</div>
        <a>See all</a>
      </div>
      <div className={classes.scroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link style={{ textDecoration: 'none' }} to={`${props.match.url}/${key}`}>
            <div className={classes.playlistCard}>
              <PlaylistCard lesson={lessons[key]} />
            </div>
          </Link>
        ))}
      </div>

      <div className={classes.header}>
        <div className={classes.title}>Articles</div>
        <a>See all</a>
      </div>
      <div className={classes.scroll}>
        {articles.map((key: any) => (
          <Link style={{ textDecoration: 'none' }} to={`${props.match.url}/${key}`}>
            <ResourceCard resource={resources[key]} />
          </Link>
        ))}
      </div>

      <div className={classes.header}>
        <div className={classes.title}>Videos</div>
        <a>See all</a>
      </div>
      <div className={classes.scroll}>
        {videos.map((key: any) => (
          <Link style={{ textDecoration: 'none' }}
            to={`${props.match.url}/videos/${key}`}>
            <ResourceCard resource={resources[key]} />
          </Link>
        ))}
      </div>
      <div className={classes.bottomPad}></div>

    </div>

  );

}



export default withStyles(styles)(Guides);
