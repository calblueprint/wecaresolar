import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import StandardCard from '../../components/Cards/StandardCard';
import { selectFavoritedResources } from '../../store/resourcesSlice';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FavoriteStyles';
import { Link } from 'react-router-dom';
import FilterDropdown from '../../components/Filters/FilterDropdown';

function Favorites({ match, classes }) {
  const favResources = useSelector(selectFavoritedResources);
  const topics = useSelector((state: RootState) => state.topics);
  const allTopics: string[] = Object.keys(topics).map(
    (topic) => topics[topic].name
  );
  const allTypes : string[] = ['Article', 'Video']
  
  const [currTopics, setTopic] = useState<Set<string>>(new Set(allTopics));
  const [resType, setresType] = useState<Set<string>>(new Set(allTypes));

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
          <StandardCard
            key={resource}
            resource={favResources[resource]}
            resourceID={resource}
            completeCheck={false}
            collapsed={false}
          />
        );
      }
    } else {
      return <span />;
    }
  }
 
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
      {Object.keys(favResources).map(filteredFavResources)}
    </div>
  )};

export default withStyles(styles)(Favorites);
