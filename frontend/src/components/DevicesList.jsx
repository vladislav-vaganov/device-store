import { List } from '@material-ui/core';
import { DevicesListItemContainer } from '../containers/devicesListItemContainer';

export const DevicesList = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <DevicesListItemContainer key={item.id} {...item} index={index} />
      ))}
    </List>
  );
};
