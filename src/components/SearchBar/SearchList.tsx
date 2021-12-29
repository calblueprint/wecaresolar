import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { useSelector } from 'react-redux';
import { Resource } from '../../store/resourcesSlice';
import ResourceCard from '../Cards/ResourceCard';
import { RootState } from '../../store/reducers';
import { Typography } from '@material-ui/core';
import FilterDropdown from '../Filters/FilterDropdown';

interface SearchListProps {
  classes: any;
  query: string;
}

function SearchList(props: SearchListProps) {
  const { classes, query } = props;

  //pull resources from Redux using Fuse
  const options = {
    keys: ['title']
  };

  const Search = (query) => {
    const resources = useSelector((state: RootState) => {
      return Object.keys(state.resources).map<Resource>(
        (r: string) => state.resources[r]
      );
    });
    const fuse = new Fuse(resources, options);
    if (!query) {
      return [];
    }
    return fuse.search(query);
  };
  const searchResults = Search(query);

  const topics = useSelector((state: RootState) => state.topics);
  const allTopics: string[] = Object.keys(topics).map(
    (topic) => topics[topic].name
  );
  const allTypes: string[] = ['Article', 'Video'];

  const [currTopics, setTopic] = useState<Set<string>>(new Set(allTopics));
  const [resType, setresType] = useState<Set<string>>(new Set(allTypes));

  function filteredSearchResults(resource: any) {
    if (
      currTopics.size === 0 ||
      Array.from(currTopics.values())
        .map((topic) => searchResults[resource].item.tags.includes(topic))
        .includes(true)
    ) {
      if (
        resType.size === 0 ||
        resType.has(searchResults[resource].item.type)
      ) {
        return (
          <ResourceCard
            key={searchResults[resource].item.title}
            resource={searchResults[resource].item}
            resourceID={searchResults[resource].item.title}
            expand={true}
            includeCheck={true}
          />
        );
      }
    }
  }

  return (
    <div className={classes.searchList}>
      <div className={classes.header}>
        <Typography variant="h1" className={classes.searchHeader}>
          Search Results
        </Typography>
        <div className={classes.dropdown}>
          <FilterDropdown
            topics={allTopics}
            currTopics={currTopics}
            changeTopic={setTopic}
            types={allTypes}
            currTypes={resType}
            changeType={setresType}
          />
        </div>
      </div>

      {searchResults.length == 0 ? <div> No Results Found</div> : null}

      {Object.keys(searchResults).map(filteredSearchResults)}
    </div>
  );
}

export default withStyles(styles)(SearchList);
