import { all } from '@redux-saga/core/effects';
import { watchAddToCart, watchRemoveFromCart } from './cart';

import { fetchList, watchQuantityUpdates } from './list';

export const rootSaga = function* () {
  yield all([fetchList(), watchQuantityUpdates(), watchAddToCart(), watchRemoveFromCart()]);
};
