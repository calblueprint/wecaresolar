import React from 'react';
import { useSelector } from 'react-redux';
import PreviewCard from './PreviewCard';
import { RootState } from '../store/reducers';

function fuzzysearch(needle, haystack) {
  const hlen = haystack.length;
  const nlen = needle.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return needle === haystack;
  }
  let i = 0;
  let j = 0;
  outer: for (i = 0, j = 0; i < nlen; i++) {
    const nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

function matcher(query, resource, id) {
  const description =
    resource.title + resource.tags.join(' ') + resource.data.preview;
  return (
    <div>
      {fuzzysearch(query, description) && <PreviewCard resource={resource} resourceID={id} />}
    </div>
  );
}

function SearchList(query) {
  const resources = useSelector((state: RootState) => state.resources);
  console.log(query);
  return (
    <div>
      {Object.keys(resources).map((r: any) => matcher(query, resources[r], r))}
    </div>
  );
}

export default SearchList;
