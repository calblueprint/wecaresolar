import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FilterStyles';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpandMore } from '@material-ui/icons';
import CompletedButton from '../../components/CardComponents/CompletedButton';

/* Set up Props for Filter Dropdown */

interface FilterDropdownProps {
  classes: any;
  title?: string;
  topics: string[];
  currTopics: Set<string>;
  changeTopic(topics: Set<string>): any;
  types: string[];
  currTypes: Set<string>;
  changeType(types: Set<string>): any;

  // add in what types you can select from
  // add in a setState func to modify types
}

/* Objectives of this Dropdown:
 */

const FilterDropdown = (props: FilterDropdownProps) => {
  const {
    classes,
    title,
    topics,
    currTopics,
    changeTopic,
    types,
    currTypes,
    changeType
  } = props;
  // boolean to determine whehter dropdown is open or not
  const [open, setOpen] = useState(false);
  // const [selectedTopic, setSelectedTopic] = useState<boolean[]>(
  //   Array(topics.length).fill(true)
  // );
  // const [selectedType, setSelectedType] = useState<boolean[]>(
  //   Array(types.length).fill(true)
  // );

  // header title? this.props.titl

  // onclick for topics

  // onclick for types

  //get the props from props
  function handleSelectAll(
    currList: Set<string>,
    allOptions: string[],
    updateSet: (currList: Set<string>) => any
  ) {
    if (currList.size === allOptions.length) {
      updateSet(new Set());
    } else {
      updateSet(new Set(allOptions));
    }
  }

  function handleSelect(
    option: string,
    currList: Set<string>,
    updateSet: (currList: Set<string>) => any
  ) {
    const updatedList = new Set(currList);
    if (currList.has(option)) {
      updatedList.delete(option);
      updateSet(updatedList);
    } else {
      updatedList.add(option);
      updateSet(updatedList);
    }
  }

  return (
    <div className={classes.dropdown}>
      <div
        className={classes.dropdownButton}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={classes.buttonLabel}>Filter by</div>
        <ExpandMoreIcon className={classes.icon}></ExpandMoreIcon>
      </div>
      {open ? (
        <div className={classes.dropdownPopup}>
          {/* topics */}
          <div className={classes.headerBox}>
            <div className={classes.header}>Topics</div>
            <button
              className={classes.selectAll}
              onClick={() => handleSelectAll(currTopics, topics, changeTopic)}
            >
              {currTopics.size === topics.length
                ? 'Deselect all'
                : 'Select all'}
            </button>
          </div>
          <div className={classes.list}>
            {topics.map((topic) => (
              <div className={classes.item}>
                <div className={classes.option}>{topic}</div>
                <div className={classes.checkmark}>
                  <CompletedButton
                    isCompleted={currTopics.has(topic)}
                    handleClick={() =>
                      handleSelect(topic, currTopics, changeTopic)
                    }
                    fillColor={'#F6B350'}
                  ></CompletedButton>
                </div>
              </div>
            ))}
          </div>
          <hr className={classes.lineBreak} />
          {/* types */}
          <div className={classes.headerBox}>
            <div className={classes.header}>Types</div>
            <button
              className={classes.selectAll}
              onClick={() => handleSelectAll(currTypes, types, changeType)}
            >
              {currTypes.size === types.length
                ? 'Deselect all'
                : 'Select all'}
            </button>
          </div>
          <div className={classes.list}>
            {types.map((type) => (
              <div className={classes.item}>
                <div className={classes.option}>{type}</div>
                <div className={classes.checkmark}>
                  <CompletedButton
                    isCompleted={currTypes.has(type)}
                    handleClick={() =>
                      handleSelect(type, currTypes, changeType)
                    }
                    fillColor={'#F6B350'}
                  ></CompletedButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );

  /* Structure of a Dropdown */
  /* Header wrapping */
  /* button label (header) */
  /* list items wrapping */
  /* body (toggled by a boolean) */
  /*
    * text header
    * map all the type of resources
    * similar to
    {Object.keys(topics).map((key) => (
      <div><topic> {bool? <checkmark>: unchecked}</div>
    ))}

    * text header
    * in the body, use an array.map to map all the topics 
    similar to
    {Object.keys(topics).map((key) => (
      <div><topic> {bool? <checkmark>: unchecked}</div>
    ))}  
  */
};

export default withStyles(styles)(FilterDropdown);
