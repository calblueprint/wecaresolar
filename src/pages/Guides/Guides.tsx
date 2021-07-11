import React from 'react';
import PlaylistCard from '../../components/Cards/PlaylistCard';
import ResourceCard from '../../components/Cards/ResourceCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link } from 'react-router-dom';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './GuidesStyles';
import { resourceTypes } from '../../resourceTypes';

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

  const typesToData: Record<string, string[]> = {
    [resourceTypes.INSTRUCTION]: articles,
    [resourceTypes.VIDEO]: videos
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1">Playlists</Typography>
        <div>
          <Link
            className={classes.list}
            to={{ pathname: `Guides/${resourceTypes.PLAYLIST}` }}
          >
            See all
          </Link>
        </div>
      </div>
      <div className={classes.scroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link
            key={key}
            style={{ textDecoration: 'none' }}
            to={`${props.match.url}/${resourceTypes.PLAYLIST}/${key}`}
          >
            <div className={classes.playlistCard}>
              <PlaylistCard lesson={lessons[key]} expand={false} />
            </div>
          </Link>
        ))}
      </div>

      {Object.keys(typesToData).map((type) => (
        <div>
          <div className={classes.divider} />
          <div className={classes.header}>
            <Typography variant="h1">{type}s</Typography>
            <div>
              <Link
                className={classes.list}
                to={{ pathname: `Guides/${type}` }}
              >
                See all
              </Link>
            </div>
          </div>
          <div className={classes.scroll}>
            {typesToData[type].map((key: any) => (
              <ResourceCard
                resource={resources[key]}
                resourceID={key}
                includeCheck={true}
                includePhoto={true}
                expand={false}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default withStyles(styles)(Guides);
