import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StandardCard from '../../components/Cards/StandardCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';
import { withStyles } from "@material-ui/core/styles";
import { styles } from '../../components/Favorites/FavoriteStyles';
import { Link } from 'react-router-dom';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

function Favorites({ match, classes }) {
  const favResources = useSelector(selectFavoritedResources);
  const [resType, setresType] = useState('all');
  const [Topic, setTopic] = useState('');

  const handleResChange = (event) => {
    setresType(event.target.value);
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.title}>Favorites</div>
        <FormControl >
          <Select value={resType}
            className={classes.select}
            classes={{ root: classes.root }}
            onChange={handleResChange}>
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={10}>Videos</MenuItem>
            <MenuItem value={20}>Articles</MenuItem>
          </Select>
        </FormControl>
      </div>
      {Object.keys(favResources).map((resource: any) => (
        <Link style={{ textDecoration: 'none', margin: '1%' }} to={`resources/${resource}`}>
          <StandardCard key={resource} resource={favResources[resource]} resourceID={resource} />
        </Link>
      ))
      }
    </div >
  );
}

export default withStyles(styles)(Favorites);
