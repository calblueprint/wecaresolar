import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BugReportIcon from '@material-ui/icons/BugReport';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import { styles } from './SettingsDrawerStyles';

type DrawerProps = {
  classes: any;
};

const SettingsDrawer = (props: DrawerProps) => {
  const { classes } = props;
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (open: boolean) => () => {
    setState({ bottom: open });
  };

  const list = () => (
    <div>
      <h2 className={classes.title}> We Care Solar</h2>
      <Divider />
      <List className={classes.list}>
        {['Report An Incident', 'Report a Bug', 'Settings'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <MailIcon /> : null}
                {index === 1 ? <BugReportIcon /> : null}
                {index === 2 ? <SettingsIcon /> : null}{' '}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          {' '}
          <SettingsIcon />
        </Button>
        <Drawer
          anchor={'bottom'}
          open={state['bottom']}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default withStyles(styles)(SettingsDrawer);
