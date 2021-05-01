import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './SearchStyles';
import { useSelector } from 'react-redux';
import { Resource } from '../../store/resourcesSlice';
import StandardCard from '../Cards/StandardCard';
import { RootState } from '../../store/reducers';
import FilterDropdown from '../Filters/FilterDropdown';

function SearchList(props) {
  const { classes } = props;
  const options = {
    keys: ['title']
  };
  let resources = useSelector((state: RootState) => {
    return Object.keys(state.resources).map<Resource>(
      (r: string) => state.resources[r]
    );
  });

  const topics = useSelector((state: RootState) => state.topics);
  const allTopics: string[] = Object.keys(topics).map(
    (topic) => topics[topic].name
  );

  const allTypes: string[] = ['Article', 'Video', 'Playlist'];

  const [currTopics, setTopic] = useState<Set<string>>(new Set());
  const [currTypes, setType] = useState<Set<string>>(new Set());

  const fuse = new Fuse(resources, options);
  const results = fuse.search(props.query);

  function filterSearchResults(resource: any) {
    if (
      currTopics.size == 0 ||
      Array.from(currTopics.values())
        .map((topic) => resource.item.tags.includes(topic))
        .includes(true)
    ) {
      if (currTypes.size == 0 || currTypes.has(resource.item.type)) {
        return (
          <StandardCard
            key={resource.item.refIndex}
            resource={resource.item}
            resourceID={resource.item.title}
            completeCheck={false}
            collapsed={false}
          />
        );
      }
    } else {
      return <span />;
    }
  }

  const filteredResults = results.map(filterSearchResults);

  return (
    <div className={classes.searchList}>
      <div className={classes.header}>
        <Typography variant="h1">Search Results</Typography>
        <div className={classes.dropdown}>
          <FilterDropdown
            topics={allTopics}
            currTopics={currTopics}
            changeTopic={setTopic}
            types={allTypes}
            currTypes={currTypes}
            changeType={setType}
          ></FilterDropdown>
        </div>
      </div>

      <div className={classes.results}></div>

      {filteredResults.length <= 0 && (
        <div>
          <Typography variant="h3">No results found.</Typography>
        </div>
      )}
      {filteredResults.length > 0 && filteredResults}
    </div>
  );
}

export default withStyles(styles)(SearchList);
