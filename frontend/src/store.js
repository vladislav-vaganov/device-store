import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { ReducerNames } from './constants';
import { cartReducer } from './reducers/cart';
import { dialogReducer } from './reducers/dialog';
import { listReducer } from './reducers/list';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    [ReducerNames.list]: listReducer,
    [ReducerNames.dialog]: dialogReducer,
    [ReducerNames.cart]: cartReducer,
  }),
  middleware: [logger, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
