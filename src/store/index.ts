import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { useSelector, useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import orderReducer from 'redux/order/orderReducer';
import { orderSagaWatcher } from 'redux/order/orderSaga';

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

// Using useAppSelector instead of useSelector
// 1. Don't need to access 'react-redux' module every time in every component
// 2. In typescript, don't need to specify state type (RootState) every time
export function useAppSelector<T>(fn: (state: RootState) => T): T {
  return useSelector<RootState, T>(fn);
}

// Using useAppDispatch instead of useDispatch
// 1. Don't need to access 'react-redux' module every time in every component
// 2. In typescript, don't need to specify dispatch type (AppDispatch (connect with store)) every time
export const useAppDispatch = () => useDispatch<AppDispatch>();
