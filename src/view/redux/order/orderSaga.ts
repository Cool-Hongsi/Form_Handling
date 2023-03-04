/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getOrderRequestApi } from 'service/api';
import { ORDER_ACTION } from 'service/const/action';
import {
  GetOrderRequestActionType,
  PostOrderRequestActionType,
  DeleteOrderRequestActionType,
} from 'view/redux/order/orderAction.interface';
import { getOrderFailure, getOrderSuccess } from 'view/redux/order/orderAction';

const { GET_ORDER_REQUEST, POST_ORDER_REQUEST, DELETE_ORDER_REQUEST } = ORDER_ACTION;

export function* getOrderRequestFunc(action: GetOrderRequestActionType): any {
  try {
    const getOrderRequestResult: AxiosResponse | Error = yield call(getOrderRequestApi);

    // Fail Case
    if (!(getOrderRequestResult as AxiosResponse).status || (getOrderRequestResult as AxiosResponse).status !== 200) {
      yield put(getOrderFailure(getOrderRequestResult as Error));
      return;
    }

    // Success Case
    yield put(getOrderSuccess((getOrderRequestResult as AxiosResponse).data));
  } catch (err) {
    yield put(getOrderFailure(err as Error));
    return;
  }
}

export function* postOrderRequestFunc(action: PostOrderRequestActionType): any {
  yield console.log(action);
}

export function* deleteOrderRequestFunc(action: DeleteOrderRequestActionType): any {
  yield console.log(action);
}

export function* orderSagaWatcher() {
  yield takeLatest(GET_ORDER_REQUEST, getOrderRequestFunc);
  yield takeLatest(POST_ORDER_REQUEST, postOrderRequestFunc);
  yield takeLatest(DELETE_ORDER_REQUEST, deleteOrderRequestFunc);
}
