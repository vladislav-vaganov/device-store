import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';

export const DevicesList = () => {
  return (
    <List>
      <ListItem button divider>
        <ListItemIcon>
          <Typography variant="body1" color="textPrimary">
            1
          </Typography>
        </ListItemIcon>
        <ListItemText primary="Device 1" />
        <ListItemSecondaryAction>
          <Typography variant="body1" color="textPrimary">
            5
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button divider>
        <ListItemIcon>
          <Typography variant="body1" color="textPrimary">
            2
          </Typography>
        </ListItemIcon>
        <ListItemText primary="Device 2" />
        <ListItemSecondaryAction>
          <Typography variant="body1" color="textPrimary">
            7
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button divider>
        <ListItemIcon>
          <Typography variant="body1" color="textPrimary">
            3
          </Typography>
        </ListItemIcon>
        <ListItemText primary="Device 3" />
        <ListItemSecondaryAction>
          <Typography variant="body1" color="textPrimary">
            4
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
