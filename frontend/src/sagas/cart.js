import _ from 'lodash';
import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { ADD_TO_CART, REMOVE_FROM_CART, updateCart } from '../actions/cart';
import { ReducerNames } from '../constants';
import { updateListItemQuantity } from '../actions/list';

function* postQuantityChanges({ id, delta }) {
  const response = yield call(fetch, `/api/devices/${id}/quantity/change`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ delta }),
  });

  if (response.status === 200) {
    const { quantity = null } = yield response.json();
    return quantity;
  }

  const errorMessage = yield response.text() || 'An error occurred.';

  alert(errorMessage);

  return null;
}

function* handleCartAction(index, delta) {
  const { id } = yield select((state) => _.get(state, [ReducerNames.list, index], {}));

  yield put(updateCart(id, -delta));

  const updatedQuantity = yield call(postQuantityChanges, { id, delta });

  if (updatedQuantity !== null) {
    yield put(updateListItemQuantity(index, updatedQuantity));
  } else {
    yield put(updateCart(id, delta));
  }
}

function* handleAddToCart({ index }) {
  yield call(handleCartAction, index, -1);
}

export function* watchAddToCart() {
  yield takeEvery(ADD_TO_CART, handleAddToCart);
}

function* handleRemoveFromCart({ index }) {
  yield call(handleCartAction, index, 1);
}

export function* watchRemoveFromCart() {
  yield takeEvery(REMOVE_FROM_CART, handleRemoveFromCart);
}
