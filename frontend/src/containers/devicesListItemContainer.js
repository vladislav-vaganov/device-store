import { connect } from 'react-redux';
import { openDialog } from '../actions/dialog';
import { DevicesListItem } from '../components/DevicesListItem';
import { DialogTypes } from '../constants';

const mapDispatchToProps = (dispatch, { id, index }) => ({
  openItemDetails: () => {
    dispatch(openDialog(DialogTypes.itemDetails, { id, index }));
  },
});

export const DevicesListItemContainer = connect(null, mapDispatchToProps)(DevicesListItem);
