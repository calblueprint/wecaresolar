// react / redux hook that lets you 'extract data from the Redux store state, using a selector function.'
import { useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../store/reducers';
import { Link } from 'react-router-dom';
import PlaylistCard from './Cards/PlaylistCard';
import ResourceCard from './Cards/ResourceCard';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SeeAllStyles';
import CountTag from './CardComponents/Count/CountTag';
import { Typography } from '@material-ui/core';
import { resourceTypes } from '../resourceTypes';

type SeeAllProps = {
  classes: any;
  match;
  typeofres;
};

function SeeAll(props: SeeAllProps) {
  const { classes } = props;
  const resources = useSelector((state: RootState) => state.resources);
  const articles = Object.keys(resources).filter(
    (id) => resources[id].type == 'Article'
  );
  const videos = Object.keys(resources).filter(
    (id) => resources[id].type == 'Video'
  );
  const lessons = useSelector((state: RootState) => state.lessons);

  const countMedia = (obj) => {
    return Object.keys(obj).length;
  };

  const typesToData: Record<string, string[]> = {
    [resourceTypes.INSTRUCTION]: articles,
    [resourceTypes.VIDEO]: videos
  };

  const showResource = (type: string, typeCount) => {
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h1"> All {type}s </Typography>
          <Typography variant="body1" className={classes.countText}>
            {' '}
            <CountTag media={type} count={countMedia(typeCount)} />
          </Typography>
        </div>
        <div className={classes.scroll}>
          {typesToData[type].map((key: any) => (
            <Link
              style={{ textDecoration: 'none' }}
              to={`${props.match.url}/${key}`}
            >
              <ResourceCard
                resource={resources[key]}
                resourceID={key}
                includeCheck={true}
                includePhoto={true}
                expand={true}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  function filterType(type: string): JSX.Element {
    if (type == resourceTypes.PLAYLIST) {
      return (
        <div className={classes.root}>
          <div className={classes.header}>
            <Typography variant="h1">
              {' '}
              All {resourceTypes.PLAYLIST}s{' '}
            </Typography>
            <Typography variant="body1" className={classes.countText}>
              {' '}
              <CountTag
                media={resourceTypes.PLAYLIST}
                count={countMedia(lessons)}
              />
            </Typography>
          </div>
          <div className={classes.scroll}>
            {Object.keys(lessons).map((key: any) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={`${props.match.url}/${key}`}
              >
                <div className={classes.playlistCard}>
                  <PlaylistCard lesson={lessons[key]} expand={true} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
    if (type == resourceTypes.INSTRUCTION) {
      return showResource(type, articles);
    }

    if (type == resourceTypes.VIDEO) {
      return showResource(type, videos);
    }
    return <span />;
  }

  return filterType(props.typeofres);
}

export default withStyles(styles)(SeeAll);
