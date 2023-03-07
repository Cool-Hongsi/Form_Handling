import { FORM_ACTION, ORDER_ACTION, TABLE_ACTION } from 'service/const/action';
import { OrderModel } from 'service/model/order';
import {
  OnChangeEventType,
  FillFormActionType,
  AddValidationErrorMsgInputDataType,
  AddValidationErrorMsgActionType,
  CopyOrderFormInputDataType,
  AddLoadFormActionType,
  DeleteLoadFormActionType,
  GetOrderRequestActionType,
  GetOrderSuccessActionType,
  GetOrderFailureActionType,
  SplitOrderDataActionType,
  PostOrderRequestActionType,
  PostOrderSuccessActionType,
  PostOrderFailureActionType,
  DeleteOrderRequestActionType,
  DeleteOrderSuccessActionType,
  DeleteOrderFailureActionType,
  ClickPageNavigationActionType,
  ClickCheckBoxActionType,
  CopyOrderFormActionType,
} from 'view/redux/order/orderAction.interface';

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

export const fillForm = (inputData: OnChangeEventType): FillFormActionType => ({
  type: FILL_FORM,
  payload: inputData,
});

export const addValidationErrorMsg = (
  inputData: AddValidationErrorMsgInputDataType,
): AddValidationErrorMsgActionType => ({
  type: ADD_VALIDATION_ERROR_MSG,
  payload: inputData,
});

export const addLoadForm = (): AddLoadFormActionType => ({
  type: ADD_LOAD_FORM,
});

export const deleteLoadForm = (index: number): DeleteLoadFormActionType => ({
  type: DELETE_LOAD_FORM,
  payload: index,
});

export const getOrderRequest = (): GetOrderRequestActionType => ({
  type: GET_ORDER_REQUEST,
});

export const getOrderSuccess = (dataFromServer: OrderModel[]): GetOrderSuccessActionType => ({
  type: GET_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const getOrderFailure = (dataFromServer: Error): GetOrderFailureActionType => ({
  type: GET_ORDER_FAILURE,
  payload: dataFromServer,
});

export const splitOrderData = (splittedArray: OrderModel[][], rowCount: number): SplitOrderDataActionType => ({
  type: SPLIT_ORDER_DATA,
  payload: { splittedArray, rowCount },
});

export const postOrderRequest = (): PostOrderRequestActionType => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (dataFromServer: OrderModel): PostOrderSuccessActionType => ({
  type: POST_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const postOrderFailure = (dataFromServer: Error): PostOrderFailureActionType => ({
  type: POST_ORDER_FAILURE,
  payload: dataFromServer,
});

export const deleteOrderRequest = (): DeleteOrderRequestActionType => ({
  type: DELETE_ORDER_REQUEST,
});

export const deleteOrderSuccess = (dataFromServer: string): DeleteOrderSuccessActionType => ({
  type: DELETE_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const deleteOrderFailure = (dataFromServer: Error): DeleteOrderFailureActionType => ({
  type: DELETE_ORDER_FAILURE,
  payload: dataFromServer,
});

export const clickPageNavigation = (value: string): ClickPageNavigationActionType => ({
  type: CLICK_PAGE_NAVIGATION,
  payload: value,
});

export const clickCheckBox = (seqNoList: number[], clickType: string): ClickCheckBoxActionType => ({
  type: CLICK_CHECK_BOX,
  payload: { seqNoList, clickType },
});

export const copyOrderForm = (copiedData: CopyOrderFormInputDataType): CopyOrderFormActionType => ({
  type: COPY_ORDER_FORM,
  payload: copiedData,
});
