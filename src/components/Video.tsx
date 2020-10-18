import React from 'react';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import GetAppIcon from '@material-ui/icons/GetApp';
import Label from './Label'
type VideoProps = {
  title?: string,
  paragraph?: string,
  favorited?: boolean,
  downloaded?: boolean,

}

const Video = ({ title, paragraph, favorited, downloaded }: VideoProps) => {
  return (
    <div>
      <iframe src='https://www.youtube.com/embed/B3JcHWCA-VA'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
      />
      <h1>{title}</h1>

      <button type="button" onClick={(e) => {
        e.preventDefault();
        window.open('https://v3solarsuitcaseinstructionalvideos.s3-us-west-1.amazonaws.com/1_v3SolarSuitcase_InstallationPlanning.mp4')
      }}>Download</button>

      {favorited ? <Label title="Favorited" icon={<TurnedInIcon />} /> : <Label title="Favorited" icon={<TurnedInNotIcon />} />}
      {downloaded ? <Label title="Downloaded" icon={<GetAppIcon />} /> : <span />}





    </div>
  )
}

export default Video;