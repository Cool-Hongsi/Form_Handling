/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getOrderRequestApi, postOrderRequestApi } from 'service/api';
import { ORDER_ACTION } from 'service/const/action';

import {
  GetOrderRequestActionType,
  PostOrderRequestActionType,
  DeleteOrderRequestActionType,
} from 'view/redux/order/orderAction.interface';
import {
  addValidationErrorMsg,
  getOrderFailure,
  getOrderSuccess,
  postOrderFailure,
  postOrderSuccess,
} from 'view/redux/order/orderAction';
import { inputValidation } from 'service/util/inputValidation';

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
  const reducerSelector = yield select();

  // Form Validation!
  const { tempBaseForm, tempLoadForm, isInvalid } = yield inputValidation(reducerSelector.orderReducer);

  yield put(addValidationErrorMsg({ tempBaseForm, tempLoadForm }));

  // Validation Success
  if (!isInvalid) {
    // Data handling for sending data to backend (structure)
    let body = {};

    Object.entries(tempBaseForm).forEach((baseForm: any) => {
      body = {
        ...body,
        [baseForm[0]]: baseForm[1].value,
      };
    });

    const filteredTempLoadForm = tempLoadForm.map((loadForm: any) => {
      let tempData = {};
      Object.entries(loadForm).forEach((load: any) => {
        tempData = {
          ...tempData,
          [load[0]]: load[1].value,
        };
      });
      return tempData;
    });

    body = { ...body, loadPlace: filteredTempLoadForm }; // No SeqNo in this case

    try {
      const postOrderRequestResult: AxiosResponse | Error = yield call(postOrderRequestApi, body);

      // Fail Case
      if (
        !(postOrderRequestResult as AxiosResponse).status ||
        (postOrderRequestResult as AxiosResponse).status !== 200
      ) {
        yield put(postOrderFailure(postOrderRequestResult as Error));
        return;
      }

      // Success Case
      yield put(postOrderSuccess((postOrderRequestResult as AxiosResponse).data));
    } catch (err) {
      yield put(postOrderFailure(err as Error));
      return;
    }
  }
}

export function* deleteOrderRequestFunc(action: DeleteOrderRequestActionType): any {
  yield console.log(action);
}

export function* orderSagaWatcher() {
  yield takeLatest(GET_ORDER_REQUEST, getOrderRequestFunc);
  yield takeLatest(POST_ORDER_REQUEST, postOrderRequestFunc);
  yield takeLatest(DELETE_ORDER_REQUEST, deleteOrderRequestFunc);
}
