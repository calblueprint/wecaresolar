import React from 'react';
import { useSelector } from 'react-redux';
import { Resource } from '../store/resourcesSlice';
import PreviewCard from './PreviewCard';
import { RootState } from '../store/reducers';

function fuzzysearch(needle, haystack) {
  const hlen = haystack.length;
  const nlen = needle.length;
  let score = 0;
  if (nlen > hlen) {
    return score;
  }
  if (nlen === hlen) {
    return Number.MAX_SAFE_INTEGER;
  }
  let i = 0;
  let j = 0;
  outer: for (i = 0, j = 0; i < nlen; i++) {
    const nch = needle.charCodeAt(i);
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        score++;
        continue outer;
      }
    }
    return -score;
  }
  return -score;
}

function SearchList(props) {
  const resources = useSelector((state: RootState) => state.resources);
  const searchable: Resource[] = [];
  Object.keys(resources).map((r: any) => searchable.push(r));
  console.log(searchable);
  const display = searchable
    .sort(function (a, b) {
      return (
        fuzzysearch(props.query, resources[Number(a)].title) -
        fuzzysearch(props.query, resources[Number(b)].title)
      );
    })
    .slice(0, Math.min(searchable.length, 5));
  console.log(display);
  
  return (
    <div>
      {props.query != '' &&
        display.map((r: any) => (
          <PreviewCard resource={resources[r]} resourceID={r} />
        ))}
    </div>
  );
}

export default SearchList;
