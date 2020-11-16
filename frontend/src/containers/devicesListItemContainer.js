import { connect } from 'react-redux';
import { openDialog } from '../actions/dialog';
import { DevicesListItem } from '../components/DevicesListItem';
import { DialogTypes } from '../constants';

const mapDispatchToProps = (dispatch, { index }) => ({
  openDeviceDetails: () => {
    dispatch(openDialog(DialogTypes.deviceDetails, { index }));
  },
});

export const DevicesListItemContainer = connect(null, mapDispatchToProps)(DevicesListItem);
