import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StandardCard from '../../components/Cards/StandardCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';
import { withStyles } from "@material-ui/core/styles";
import { styles } from '../../components/Favorites/FavoriteStyles';
import { Link } from 'react-router-dom';
import {
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

function Favorites({ match, classes }) {
  const favResources = useSelector(selectFavoritedResources);
  const [resType, setresType] = useState('All');
  const [Topic, setTopic] = useState('');

  const handleResChange = (event) => {
    setresType(event.target.value);
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  function filteredFavResources(resource: any) {
    if (resType === 'All' || favResources[resource].type === resType) {
      return (<Link style={{ textDecoration: 'none', margin: '1%' }} to={`resources/${resource}`}>
        <StandardCard key={resource} resource={favResources[resource]} resourceID={resource} />
      </Link>)
    } else {
      return <span />
    }
  }

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.title}>Favorites</div>
        <FormControl >
          <Select value={resType}
            disableUnderline
            className={classes.select}
            classes={{ root: classes.root, selectMenu: classes.selectMenu, icon: classes.icon }}
            onChange={handleResChange}>
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Video'}>Videos</MenuItem>
            <MenuItem value={'Article'}>Articles</MenuItem>
          </Select>
        </FormControl>
      </div>
      {Object.keys(favResources).map(filteredFavResources)
      }
    </div >
  );
}

export default withStyles(styles)(Favorites);
