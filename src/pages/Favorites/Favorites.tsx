import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../../components/Cards/StandardCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../components/CardComponents/FavoriteStyles';
import { Link } from 'react-router-dom';
import { FormControl, Select, MenuItem, Input } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Favorites({ match, classes }) {
  const favResources = useSelector(selectFavoritedResources);
  const topics = useSelector((state: RootState) => state.topics);
  const allTopics: string[] = Object.keys(topics).map(
    (topic) => topics[topic].name
  );
  const [resType, setresType] = useState("All");
  const [currTopics, setTopic] = useState([]);

  const handleResChange = (event) => {
    setresType(event.target.value);
  };
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  function filteredFavResources(resource: any) {
    if (
      currTopics.length == 0 ||
      currTopics
        .map((topic) => favResources[resource].tags.includes(topic))
        .includes(true)
    ) {
      if (resType === 'All' || favResources[resource].type === resType) {
        console.log(resource)
        return (
          <Link className={classes.link} to={`resources/${resource}`}>
            <StandardCard
              key={resource}
              resource={favResources[resource]}
              resourceID={resource}
              completeCheck={false}
              collapsed={false}
            />
          </Link>
        );
      }
    } else {
      return <span />;
    }
  }

  return (
    <div className={classes.page}>
      <div className={classes.title}>Favorites</div>
      <div className={classes.filters}>
        <div className={classes.filterLabel}>Topics</div>
        <FormControl className={classes.formControl}>
            <Select
              multiple
              value={currTopics}
              onChange={handleTopicChange}
              // input={<Input />}
              disableUnderline
              displayEmpty
              // renderValue={value => 'All'}
              IconComponent={() => (<ExpandMoreIcon />)}
              className={classes.select}
              classes={{ selectMenu: classes.selectMenu, icon: classes.icon }}
              MenuProps={{ classes: { paper: classes.dropdownStyle }}}
            >
              {Object.keys(topics).map((key) => (
                <MenuItem key={key} value={topics[key].name}>
                  {topics[key].name}
                </MenuItem>
              ))}
            </Select>
        </FormControl>
        <div className={classes.filterLabel}>Types</div>
        <FormControl className={classes.formControl}>
          <Select
            value={resType}
            disableUnderline
            className={classes.select}
            classes={{ selectMenu: classes.selectMenu, icon: classes.icon }}
            onChange={handleResChange}
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Video'}>Videos</MenuItem>
            <MenuItem value={'Article'}>Articles</MenuItem>
          </Select>
        </FormControl>
      </div>
      {Object.keys(favResources).map(filteredFavResources)}
    </div>
  );
}

export default withStyles(styles)(Favorites);
