import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';

export const DevicesListItem = ({ id, name, quantity, index, openDeviceDetails }) => (
  <ListItem button divider onClick={openDeviceDetails}>
    <ListItemIcon>
      <Typography variant="body1" color="textPrimary">
        {index + 1}
      </Typography>
    </ListItemIcon>

    <ListItemText primary={name} />

    <ListItemSecondaryAction>
      <Typography variant="body1" color="textSecondary">
        {quantity}
      </Typography>
    </ListItemSecondaryAction>
  </ListItem>
);
