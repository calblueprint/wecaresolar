import React from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from "@material-ui/core/styles"

const styles = makeStyles(() => createStyles({
  playlistScroll: {
    display: "flex",
    overflow: "scroll"
  },
  playlistCard: {
    width: "200px"
  }
}))

function Guides({ match }) {
  const lessons = useSelector((state: RootState) => state.lessons);
  const classes = styles();

  return (
    <div>
      <h1>Playlists</h1>
      <div className={classes.playlistScroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link to={`${match.url}/${key}`}>
            <div className={classes.playlistCard}>
              <PlaylistCard lesson={lessons[key]} />
            </div>
          </Link>
        ))}
      </div>
    </div>

  )

}
export default Guides;