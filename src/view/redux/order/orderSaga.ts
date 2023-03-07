/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { deleteOrderRequestApi, getOrderRequestApi, postOrderRequestApi } from 'service/api';
import { ORDER_ACTION } from 'service/const/action';

import {
  GetOrderRequestActionType,
  PostOrderRequestActionType,
  DeleteOrderRequestActionType,
} from 'view/redux/order/orderAction.interface';
import {
  addValidationErrorMsg,
  deleteOrderFailure,
  deleteOrderSuccess,
  getOrderFailure,
  getOrderSuccess,
  postOrderFailure,
  postOrderSuccess,
  splitOrderData,
} from 'view/redux/order/orderAction';
import { inputValidation } from 'service/util/inputValidation';
import { splitArray } from 'service/util/splitArray';
import { OrderModel } from 'service/model/order';

const { GET_ORDER_REQUEST, POST_ORDER_REQUEST, DELETE_ORDER_REQUEST } = ORDER_ACTION;

export function* getOrderRequestFunc(action: GetOrderRequestActionType): any {
  try {
    const getOrderRequestResult: AxiosResponse | Error = yield call(getOrderRequestApi);

    // Fail
    if (!(getOrderRequestResult as AxiosResponse).status || (getOrderRequestResult as AxiosResponse).status !== 200) {
      yield put(getOrderFailure(getOrderRequestResult as Error));
      return; // Stop further processing
    }
    // Success
    // 1. Store Original Data (For Handling Row Count in Table Later)
    // 2. Create 2D Array Data by Original Data
    yield put(getOrderSuccess((getOrderRequestResult as AxiosResponse).data));

    const reducerSelector = yield select();
    const rowCount = reducerSelector.orderReducer.tableData.rowCount; // 20
    const splittedArray: OrderModel[][] = yield splitArray((getOrderRequestResult as AxiosResponse).data, rowCount);
    yield put(splitOrderData(splittedArray, rowCount));
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

      // Fail
      if (
        !(postOrderRequestResult as AxiosResponse).status ||
        (postOrderRequestResult as AxiosResponse).status !== 200
      ) {
        yield put(postOrderFailure(postOrderRequestResult as Error));
        return;
      }

      // Success
      yield put(postOrderSuccess((postOrderRequestResult as AxiosResponse).data));
    } catch (err) {
      yield put(postOrderFailure(err as Error));
      return;
    }
  }
}

export function* deleteOrderRequestFunc(action: DeleteOrderRequestActionType): any {
  const reducerSelector = yield select();
  const deleteList: number[] = reducerSelector.orderReducer.tableData.deleteList;

  if (deleteList.length === 0) {
    yield alert('선택된 테이블 행이 없습니다');
    yield put(deleteOrderFailure(new Error('선택된 테이블 행이 없습니다')));
    return; // Stop further processing
  }

  try {
    const deleteOrderRequestResult: AxiosResponse | Error = yield call(deleteOrderRequestApi, deleteList);

    // Fail
    if (
      !(deleteOrderRequestResult as AxiosResponse).status ||
      (deleteOrderRequestResult as AxiosResponse).status !== 200
    ) {
      yield put(deleteOrderFailure(deleteOrderRequestResult as Error));
      return;
    }

    // Success
    // Get deletedSeqNoList (from query)
    const deletedSeqNoList: string[] = (deleteOrderRequestResult as AxiosResponse).data.split('?seqNoList=');
    yield put(deleteOrderSuccess(deletedSeqNoList[1]));
  } catch (err) {
    yield put(deleteOrderFailure(err as Error));
    return;
  }
}

export function* orderSagaWatcher() {
  yield takeLatest(GET_ORDER_REQUEST, getOrderRequestFunc);
  yield takeLatest(POST_ORDER_REQUEST, postOrderRequestFunc);
  yield takeLatest(DELETE_ORDER_REQUEST, deleteOrderRequestFunc);
}
