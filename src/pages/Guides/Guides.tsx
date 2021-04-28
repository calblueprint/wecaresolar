import React from 'react';
import PlaylistCard from '../../components/Guides/PlaylistCard';
import ResourceCard from '../../components/Guides/ResourceCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link, Route, Router, BrowserRouter } from 'react-router-dom';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './GuidesStyles';

type GuidesProps = {
  classes: any;
  match;
};

function Guides(props: GuidesProps) {
  const lessons = useSelector((state: RootState) => state.lessons);
  const resources = useSelector((state: RootState) => state.resources);
  const articles = Object.keys(resources).filter(
    (id) => resources[id].type == 'Article'
  );
  const videos = Object.keys(resources).filter(
    (id) => resources[id].type == 'Video'
  );

  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1">Playlists</Typography>
        <div>
          <Link className={classes.list} to={{ pathname: 'Guides/Playlists' }}>
            See all
          </Link>
        </div>
      </div>
      <div className={classes.scroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link
            key={key}
            style={{ textDecoration: 'none' }}
            to={`${props.match.url}/Playlists/${key}`}
          >
            <div className={classes.playlistCard}>
              <PlaylistCard lesson={lessons[key]} />
            </div>
          </Link>
        ))}
      </div>
      <div className={classes.divider} />
      <div className={classes.header}>
        <Typography variant="h1">Instructions</Typography>
        <div>
          <Link className={classes.list} to={{ pathname: 'Guides/Articles' }}>
            See all
          </Link>
        </div>
      </div>
      <div className={classes.scroll}>
        {articles.map((key: any) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`${props.match.url}/Articles/${key}`}
          >
            <ResourceCard resource={resources[key]} />
          </Link>
        ))}
      </div>
      <div className={classes.divider} />
      <div className={classes.header}>
        <Typography variant="h1">Videos</Typography>
        <div>
          <Link className={classes.list} to={{ pathname: 'Guides/Videos' }}>
            See all
          </Link>
        </div>
      </div>
      <div className={classes.scroll}>
        {videos.map((key: any) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`${props.match.url}/Videos/${key}`}
          >
            <ResourceCard resource={resources[key]} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Guides);
