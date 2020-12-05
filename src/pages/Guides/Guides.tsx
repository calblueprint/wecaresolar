import React from 'react';
import PlaylistCard from '../../components/Playlist/PlaylistCard';
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

  const { classes } = props;
  function playvideo(index) {
    let resource = resources[index]
    if (isVideo(resource.data)) {
      return <Video resId={index} videoDetails={resource} videoData={resource.data} />
    }
  }
  return (
    <div>
      {/* <h1>Playlists</h1> */}
      {/* <div className={classes.playlistScroll}>
        {Object.keys(lessons).map((key: any) => (
          <Link to={`${props.match.url}/${key}`}>
            <div className={classes.playlistCard}>
              <PlaylistCard lesson={lessons[key]} />
            </div>
          </Link>
        ))}
      </div> */}
      {playvideo(1)}

    </div>

  )

}
export default withStyles(styles)(Guides);
