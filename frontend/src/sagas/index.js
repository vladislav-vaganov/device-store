import { all } from '@redux-saga/core/effects';
import { watchAddToCart, watchRemoveFromCart } from './cart';

import { fetchList } from './list';

export const rootSaga = function* () {
  yield all([fetchList(), watchAddToCart(), watchRemoveFromCart()]);
};
