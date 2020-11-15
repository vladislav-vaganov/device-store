import { call, put } from '@redux-saga/core/effects';
import { initList } from '../actions/list';

export function* fetchList() {
  const response = yield call(fetch, '/api/devices');
  const devices = yield response.json();

  yield put(initList(devices));
}
