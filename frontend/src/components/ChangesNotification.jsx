import { List, ListItem, Typography } from '@material-ui/core';

export const ChangesNotification = ({ changes = [] }) => (
  <List>
    {changes.map(({ name, delta }, index) => (
      <ListItem key={index}>
        <Typography variant="body1" color="textPrimary">
          {`${name} quantity ${delta > 0 ? 'in' : 'de'}creased by ${Math.abs(delta)}`}
        </Typography>
      </ListItem>
    ))}
  </List>
);
