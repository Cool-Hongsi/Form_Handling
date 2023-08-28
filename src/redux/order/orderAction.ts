import { FORM_ACTION, ORDER_ACTION, TABLE_ACTION } from 'const/action';
import { IOrder } from 'model/order';
import {
  IOnChangeEvent,
  IFillFormAction,
  IAddValidationErrorMsgInputData,
  IAddValidationErrorMsgAction,
  ICopyOrderFormInputData,
  IAddLoadFormAction,
  IDeleteLoadFormAction,
  IGetOrderRequestAction,
  IGetOrderSuccessAction,
  IGetOrderFailureAction,
  ISplitOrderDataAction,
  IPostOrderRequestAction,
  IPostOrderSuccessAction,
  IPostOrderFailureAction,
  IDeleteOrderRequestAction,
  IDeleteOrderSuccessAction,
  IDeleteOrderFailureAction,
  IClickPageNavigationAction,
  IClickCheckBoxAction,
  ICopyOrderFormAction,
} from 'redux/order/orderAction.interface';

const { FILL_FORM, ADD_VALIDATION_ERROR_MSG, ADD_LOAD_FORM, DELETE_LOAD_FORM } = FORM_ACTION;

const {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  SPLIT_ORDER_DATA,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
} = ORDER_ACTION;

const { CLICK_PAGE_NAVIGATION, CLICK_CHECK_BOX, COPY_ORDER_FORM } = TABLE_ACTION;

export const fillForm = (inputData: IOnChangeEvent): IFillFormAction => ({
  type: FILL_FORM,
  payload: inputData,
});

export const addValidationErrorMsg = (inputData: IAddValidationErrorMsgInputData): IAddValidationErrorMsgAction => ({
  type: ADD_VALIDATION_ERROR_MSG,
  payload: inputData,
});

export const addLoadForm = (): IAddLoadFormAction => ({
  type: ADD_LOAD_FORM,
});

export const deleteLoadForm = (index: number): IDeleteLoadFormAction => ({
  type: DELETE_LOAD_FORM,
  payload: index,
});

export const getOrderRequest = (): IGetOrderRequestAction => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderSuccess = (dataFromServer: IOrder[]): IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const getOrderFailure = (dataFromServer: Error): IGetOrderFailureAction => ({
  type: GET_ORDER_FAILURE,
  payload: dataFromServer,
});

export const splitOrderData = (splittedArray: IOrder[][], rowCount: number): ISplitOrderDataAction => ({
  type: SPLIT_ORDER_DATA,
  payload: { splittedArray, rowCount },
});

export const postOrderRequest = (): IPostOrderRequestAction => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (dataFromServer: IOrder): IPostOrderSuccessAction => ({
  type: POST_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const postOrderFailure = (dataFromServer: Error): IPostOrderFailureAction => ({
  type: POST_ORDER_FAILURE,
  payload: dataFromServer,
});

export const deleteOrderRequest = (): IDeleteOrderRequestAction => ({
  type: DELETE_ORDER_REQUEST,
});

export const deleteOrderSuccess = (dataFromServer: string): IDeleteOrderSuccessAction => ({
  type: DELETE_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const deleteOrderFailure = (dataFromServer: Error): IDeleteOrderFailureAction => ({
  type: DELETE_ORDER_FAILURE,
  payload: dataFromServer,
});

export const clickPageNavigation = (value: string): IClickPageNavigationAction => ({
  type: CLICK_PAGE_NAVIGATION,
  payload: value,
});

export const clickCheckBox = (seqNoList: number[], clickType: string): IClickCheckBoxAction => ({
  type: CLICK_CHECK_BOX,
  payload: { seqNoList, clickType },
});

export const copyOrderForm = (copiedData: ICopyOrderFormInputData): ICopyOrderFormAction => ({
  type: COPY_ORDER_FORM,
  payload: copiedData,
});
