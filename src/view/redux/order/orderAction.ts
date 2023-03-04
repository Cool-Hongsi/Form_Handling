/* eslint-disable @typescript-eslint/no-explicit-any */
import { FORM_ACTION, ORDER_ACTION } from 'service/const/action';
import { OrderModel } from 'service/model/order';
import {
  OnChangeEventType,
  FillFormActionType,
  GetOrderRequestActionType,
  GetOrderSuccessActionType,
  GetOrderFailureActionType,
  PostOrderRequestActionType,
  PostOrderSuccessActionType,
  PostOrderFailureActionType,
  DeleteOrderRequestActionType,
  DeleteOrderSuccessActionType,
  DeleteOrderFailureActionType,
} from 'view/redux/order/orderAction.interface';

const { FILL_FORM } = FORM_ACTION;

const {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
} = ORDER_ACTION;

export const fillForm = (inputData: OnChangeEventType): FillFormActionType => ({
  type: FILL_FORM,
  payload: inputData,
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

export const postOrderRequest = (): PostOrderRequestActionType => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (dataFromServer: any): PostOrderSuccessActionType => ({
  type: POST_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const postOrderFailure = (dataFromServer: any): PostOrderFailureActionType => ({
  type: POST_ORDER_FAILURE,
  payload: dataFromServer,
});

export const deleteOrderRequest = (): DeleteOrderRequestActionType => ({
  type: DELETE_ORDER_REQUEST,
});

export const deleteOrderSuccess = (dataFromServer: any): DeleteOrderSuccessActionType => ({
  type: DELETE_ORDER_SUCCESS,
  payload: dataFromServer,
});

export const deleteOrderFailure = (dataFromServer: any): DeleteOrderFailureActionType => ({
  type: DELETE_ORDER_FAILURE,
  payload: dataFromServer,
});
