import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SearchStyles';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';

interface SearchCardProps {
  resource: Resource;
  resourceID: string;
  classes: any;
}

const SearchCard = (props: SearchCardProps) => {
  const { classes } = props;
  return (
    <Card className={classes.searchCard}>
      <h3 className={classes.searchTitle}>{props.resource.title}</h3>
      <h5 className={classes.searchType}>{props.resource.type}</h5>
      <p className={classes.searchBody}>{props.resource.data.preview}</p>
    </Card>
  );
};

export default withStyles(styles)(SearchCard);
