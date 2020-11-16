import _ from 'lodash';
import { connect } from 'react-redux';
import { AppHeader } from '../components/AppHeader';
import { ReducerNames } from '../constants';

const mapStateToProps = (state) => {
  const cart = _.get(state, ReducerNames.cart, {});
  return {
    totalItemsInCart: Object.values(cart).reduce((total, value) => total + value, 0),
  };
};

export const AppHeaderContainer = connect(mapStateToProps)(AppHeader);
