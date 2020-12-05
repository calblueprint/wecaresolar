import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../SearchBar/SearchStyles';
import { Resource } from '../../store/resourcesSlice';
import Card from '@material-ui/core/Card';
import FavoriteButton from '../Favorites/FavoriteButton';


interface StandardCardProps {
  resource: Resource;
  resourceID: number;
  classes: any;
}

const StandardCard = (props: StandardCardProps) => {
  const { classes } = props;
  return (
    <Card className={classes.searchCard}>
      <div className={classes.row}>
        <div>
          <h3 className={classes.searchTitle}>{props.resource.title}</h3>
          <h5 className={classes.searchType}>{props.resource.type}</h5>
        </div>
        <FavoriteButton
            id={props.resourceID}
            isFavorited={props.resource.isFavorited}
          />
      </div>
      <p className={classes.searchBody}>{props.resource.data.preview}</p>
      
    </Card>
  );
};

export default withStyles(styles)(StandardCard);
