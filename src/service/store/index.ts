import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import orderReducer from 'view/redux/order/orderReducer';
import { orderSagaWatcher } from 'view/redux/order/orderSaga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    orderSagaWatcher(),
    // Other sagas...
  ]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      orderReducer,
      // Other reducers...
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
