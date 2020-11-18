import _ from 'lodash';
import { call, put, select, delay, take } from '@redux-saga/core/effects';
import { CLOSE_DIALOG, openDialog } from '../actions/dialog';
import { initList, updateListItemQuantity } from '../actions/list';
import { WatchQuantityUpdatesInterval, DialogTypes, ReducerNames } from '../constants';

export function* fetchList() {
  const response = yield call(fetch, '/api/devices');
  const devices = yield response.json();

  yield put(initList(devices));
}

function* updateQuantities() {
  const response = yield call(fetch, '/api/devices/quantities');
  const updatedQuantities = yield response.json();

  const devices = yield select((state) => state[ReducerNames.list]);

  const changes = [];
  for (let i = 0; i < devices.length; i++) {
    const { id, name, quantity } = devices[i];
    const newQuantity = updatedQuantities[id];

    if (newQuantity === quantity) {
      continue;
    }

    yield put(updateListItemQuantity(i, newQuantity));

    changes.push({ name, delta: newQuantity - quantity });
  }

  if (changes.length) {
    yield put(openDialog(DialogTypes.changesNotification, { changes }));
  }
}

export function* watchQuantityUpdates() {
  const isNotificationShown = yield select((state) =>
    _.get(state, [ReducerNames.dialog, DialogTypes.changesNotification, 'open'], false)
  );
  if (isNotificationShown) {
    yield take(CLOSE_DIALOG);
  }

  yield delay(WatchQuantityUpdatesInterval);

  yield call(updateQuantities);

  yield call(watchQuantityUpdates);
}
