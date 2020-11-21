import React from 'react';
import PlaylistCard from '../../components/Playlist/PlaylistCard';
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
  const { classes } = props;

  return (
    <div>
      <h1>Playlists</h1>
      <div className={classes.playlistScroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link to={`${props.match.url}/${key}`}>
            <div className={classes.playlistCard}>
              <PlaylistCard lesson={lessons[key]} />
            </div>
          </Link>
        ))}
      </div>
    </div>

  )

}
export default withStyles(styles)(Guides);
