import { all } from '@redux-saga/core/effects';

import { fetchList } from './list';

export const rootSaga = function* () {
  yield all([fetchList()]);
};
