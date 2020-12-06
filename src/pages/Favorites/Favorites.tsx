import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../../components/Cards/StandardCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';
import { withStyles } from "@material-ui/core/styles";
import { styles } from '../../components/Favorites/FavoriteStyles';
import { Link } from 'react-router-dom';
import {
  FormControl,
  Select,
  MenuItem,
  Input,
} from "@material-ui/core";
import SearchBar from '../../components/SearchBar/SearchBar';
import TabBar from '../../components/TabBar/TabBar';

function Favorites({ match, classes }) {
  const favResources = useSelector(selectFavoritedResources);
  const topics = useSelector((state: RootState) => state.topics);
  const allTopics: string[] = Object.keys(topics).map(topic => topics[topic].name)
  const [resType, setresType] = useState('All');
  const [currTopics, setTopic] = useState([]);

  const handleResChange = (event) => {
    setresType(event.target.value);
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  function filteredFavResources(resource: any) {
    if (currTopics.length == 0 || currTopics.map(topic => favResources[resource].tags.includes(topic)).includes(true)) {
      if (resType === 'All' || favResources[resource].type === resType) {
        return (<Link className={classes.link} to={`resources/${resource}`}>
          <StandardCard key={resource} resource={favResources[resource]} resourceID={resource} />
        </Link>)
      }
    }
    else {
      return <span />
    }
  }

  return (
    <div className={classes.page}>
      <SearchBar />
      <div className={classes.header}>
        <div className={classes.title}>Favorites</div>
        <div className={classes.filters}>
          <FormControl className={classes.formControl}>
            <Select
              multiple
              value={currTopics}
              onChange={handleTopicChange}
              input={<Input />}
              disableUnderline
              className={classes.select}
              classes={{ selectMenu: classes.selectMenu, icon: classes.icon }}
            >
              {Object.keys(topics).map((key) => (
                <MenuItem key={key} value={topics[key].name} >
                  {topics[key].name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select value={resType}
              disableUnderline
              className={classes.select}
              classes={{ selectMenu: classes.selectMenu, icon: classes.icon }}
              onChange={handleResChange}>
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'Video'}>Videos</MenuItem>
              <MenuItem value={'Article'}>Articles</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {
        Object.keys(favResources).map(filteredFavResources)
      }
      <TabBar />
    </div >

  );
}

export default withStyles(styles)(Favorites);
