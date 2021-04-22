import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './FilterStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CompletedButton from '../CardComponents/CompletedButton';

interface FilterDropdownProps {
  classes: any;
  title?: string;
  topics: string[];
  currTopics: Set<string>;
  changeTopic(topics: Set<string>): any;
  types: string[];
  currTypes: Set<string>;
  changeType(types: Set<string>): any;
}

const FilterDropdown = (props: FilterDropdownProps) => {
  const {
    classes,
    topics,
    currTopics,
    changeTopic,
    types,
    currTypes,
    changeType
  } = props;

  const [open, setOpen] = useState(false);

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
      {open ? (
        <div
          className={classes.overlayBackground}
          onClick={() => {
            setOpen(!open);
          }}
        />
      ) : null}
      <div
        className={classes.dropdownButton}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={classes.buttonLabel}>Filter by</div>
        {open ? (
          <ExpandLessIcon className={classes.icon} />
        ) : (
          <ExpandMoreIcon className={classes.icon} />
        )}
      </div>
      {open ? (
        <div className={classes.dropdownPopup}>
          {/* types */}
          <div className={classes.headerBox}>
            <div className={classes.header}>Types</div>
            <button
              className={classes.selectAll}
              onClick={() => handleSelectAll(currTypes, types, changeType)}
            >
              {currTypes.size === types.length ? 'Deselect all' : 'Select all'}
            </button>
          </div>
          <div className={classes.list}>
            {types.map(type => (
              <div className={classes.item}>
                <div className={classes.option}>{type}</div>
                <div className={classes.checkmark}>
                  <CompletedButton
                    isCompleted={currTypes.has(type)}
                    handleClick={() =>
                      handleSelect(type, currTypes, changeType)
                    }
                    fillColor={'#F6B350'}
                    width={'18'}
                    height={'18'}
                  />
                </div>
              </div>
            ))}
          </div>
          <hr className={classes.lineBreak} />
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
            {topics.map(topic => (
              <div className={classes.item}>
                <div className={classes.option}>{topic}</div>
                <div className={classes.checkmark}>
                  <CompletedButton
                    isCompleted={currTopics.has(topic)}
                    handleClick={() =>
                      handleSelect(topic, currTopics, changeTopic)
                    }
                    fillColor={'#F6B350'}
                    width={'18'}
                    height={'18'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(FilterDropdown);
