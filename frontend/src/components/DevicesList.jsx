import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';

export const DevicesList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, name, quantity }, index) => (
        <ListItem button divider key={id}>
          <ListItemIcon>
            <Typography variant="body1" color="textPrimary">
              {index + 1}
            </Typography>
          </ListItemIcon>
          <ListItemText primary={name} />
          <ListItemSecondaryAction>
            <Typography variant="body1" color="textPrimary">
              {quantity}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
