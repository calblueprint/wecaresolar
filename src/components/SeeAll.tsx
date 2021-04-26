// react / redux hook that lets you 'extract data from the Redux store state, using a selector function.'
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../store/reducers';
import { Link } from 'react-router-dom';
import PlaylistCard from './Guides/PlaylistCard';
import ResourceCard from './Guides/ResourceCard';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SeeAllStyles';
import StandardCard from './Cards/StandardCard';
import CountTag from '../components/Count/CountTag';
import { Typography } from '@material-ui/core';

type SeeAllProps = {
  classes: any;
  match;
  typeofres;
};

//function to return the list of playlists/articles/videos based on string type

function SeeAll(props: SeeAllProps) {
  const resources = useSelector((state: RootState) => state.resources);
  const lessons = useSelector((state: RootState) => state.lessons);
  const articles = Object.keys(resources).filter(
    (id) => resources[id].type == 'Article'
  );
  const videos = Object.keys(resources).filter(
    (id) => resources[id].type == 'Video'
  );

  const countMedia = (obj) => {
    return Object.keys(obj).length;
  };

  const { classes } = props;

  function filterType(type: string): JSX.Element {
    if (type == 'Playlists') {
      return (
        <div className={classes.root}>
          <div className={classes.header}>
            <Typography variant="h1"> All Playlists </Typography>
            <Typography variant="body1" className={classes.countText}>
              {' '}
              <CountTag media={'Playlist'} count={countMedia(lessons)} />
            </Typography>
          </div>
          <div className={classes.scroll}>
            {Object.keys(lessons).map((key: any) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={`${props.match.url}/${key}`}
              >
                <div className={classes.playlistCard}>
                  <PlaylistCard lesson={lessons[key]} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
    if (type == 'Articles') {
      return (
        <div className={classes.root}>
          <div className={classes.header}>
            <Typography variant="h1"> All Instructions </Typography>
            <Typography variant="body1" className={classes.countText}>
              {' '}
              <CountTag media={'Article'} count={countMedia(articles)} />
            </Typography>
          </div>
          <div className={classes.scroll}>
            {articles.map((key: any) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={`${props.match.url}/${key}`}
              >
                <div className={classes.articlesCard}>
                  <StandardCard
                    resource={resources[key]}
                    resourceID={key}
                    completeCheck={false}
                    collapsed={false}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (type == 'Videos') {
      return (
        <div className={classes.root}>
          <div className={classes.header}>
            <Typography variant="h1"> All Videos </Typography>
            <Typography variant="body1" className={classes.countText}>
              {' '}
              <CountTag media={'Video'} count={countMedia(videos)} />
            </Typography>
          </div>
          <div className={classes.scroll}>
            {videos.map((key: any) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={`${props.match.url}/${key}`}
              >
                <div className={classes.videoCard}>
                  <ResourceCard resource={resources[key]} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
    return <span />;
  }
  return filterType(props.typeofres);
}

export default withStyles(styles)(SeeAll);
