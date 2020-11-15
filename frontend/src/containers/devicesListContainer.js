import { connect } from 'react-redux';
import { DevicesList } from '../components/DevicesList';
import { ReducerNames } from '../constants';

const mapStateToProps = (state) => ({
  items: state[ReducerNames.list],
});

export const DevicesListContainer = connect(mapStateToProps)(DevicesList);
