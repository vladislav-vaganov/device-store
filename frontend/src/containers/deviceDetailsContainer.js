import _ from 'lodash';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cart';
import { ReducerNames } from '../constants';
import { DeviceDetails } from '../components/DeviceDetails';

const mapStateToProps = (state, { index }) => {
  const device = _.get(state, [ReducerNames.list, index], {});
  const { id } = device;

  return {
    ...device,
    itemsInCart: _.get(state, [ReducerNames.cart, id], 0),
  };
};

const mapDispatchToProps = (dispatch, { index }) => ({
  addToCart: () => {
    dispatch(addToCart(index));
  },
  removeFromCart: () => {
    dispatch(removeFromCart(index));
  },
});

export const DeviceDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(DeviceDetails);
