import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FilterStyles';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpandMore } from '@material-ui/icons';

/* Set up Props for Filter Dropdown */

interface FilterDropdownProps {
  classes: any;
  title?: string;
  changeTopic(topics: string[]): any;
  topics: string[];
  changeType(types: string[]): any;
  types: string[];
  // add in what types you can select from
  // add in a setState func to modify types
}

/* Objectives of this Dropdown:
 */

const FilterDropdown = (props: FilterDropdownProps) => {
  const { classes, title, topics, types } = props;
  // boolean to determine whehter dropdown is open or not
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<boolean[]>(
    Array(topics.length).fill(true)
  );
  const [selectedType, setSelectedType] = useState<boolean[]>(
    Array(types.length).fill(true)
  );

  // header title? this.props.titl

  // onclick for topics

  // onclick for types

  //get the props from props
  function handleSelect() {
    if (selectedTopic.every((element) => element)) {
      setSelectedTopic(Array(topics.length).fill(false));
    } else {
      setSelectedTopic(Array(topics.length).fill(true));
    }
  }

  return (
    <div>
      <div
        className={classes.dropdownButton}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={classes.buttonLabel}>Filter by</div>
        <ExpandMoreIcon className={classes.icon}></ExpandMoreIcon>
      </div>
      <div className={classes.headerBox}>
        <div className={classes.header}>Topics</div>
        <button className={classes.selectAll} onClick={handleSelect}>
          {selectedTopic.every((element) => element)
            ? 'deselect all'
            : 'select all'}
        </button>
        <div className={classes.select}></div>
      </div>
      <div className={classes.list}>
        {topics.map((topic, index) => (
          <div className={classes.item}>
            <div className={classes.option}>
              {topic}
            </div>
            <div className={classes.checkmark}>
              {/* {(selectedTopic[index]) ? } */}
            </div>
          </div>
        ))}
      </div>
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
