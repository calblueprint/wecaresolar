import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../../components/Cards/StandardCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FavoriteStyles';
import { Link } from 'react-router-dom';
import { FormControl, Select, MenuItem, Input } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterDropdown from './FilterDropdown';

function Favorites({ match, classes }) {
  const favResources = useSelector(selectFavoritedResources);
  const topics = useSelector((state: RootState) => state.topics);
  const allTopics: string[] = Object.keys(topics).map(
    (topic) => topics[topic].name
  );
  const allTypes : string[] = ['Articles', 'Videos']
  

  /* begin joyce task */

  // set up usestate to alter a list of topics we will filter by
  const [currTopics, setTopic] = useState<Set<string>>(new Set(allTopics));
  const [resType, setresType] = useState<Set<string>>(new Set(allTypes));


  /* end joyce task */

  // const handleResChange = (event) => {
  //   setresType(event.target.value);
  // };
  // const handleTopicChange = (event) => {
  //   setTopic(event.target.value);
  // };

  function filteredFavResources(resource: any) {
    if (
      currTopics.size == 0 ||
      Array.from(currTopics.values())
        .map((topic) => favResources[resource].tags.includes(topic))
        .includes(true)
    ) {
      if (resType.size == 0 || resType.has(favResources[resource].type)) {
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

  // 
  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <div className={classes.title}>Favorites</div>
        <div className={classes.dropdown}>
          <FilterDropdown
            topics={allTopics}
            currTopics={currTopics}
            changeTopic={setTopic} 
            types={allTypes}
            currTypes={resType}
            changeType={setresType}
          >
          </FilterDropdown>
        </div>
      </div>
      
      
      {/* <div className={classes.filters}>
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
      </div> */}
      {Object.keys(favResources).map(filteredFavResources)}
    </div>
  )};


export default withStyles(styles)(Favorites);
