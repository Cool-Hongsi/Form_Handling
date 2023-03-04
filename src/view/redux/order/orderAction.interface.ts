/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction } from 'redux';
import { FORM_ACTION, ORDER_ACTION } from 'service/const/action';
import { OrderModel } from 'service/model/order';

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

export interface OnChangeEventType {
  type: string;
  name: string;
  value: string;
}

export interface FillFormActionType {
  type: typeof FILL_FORM;
  payload: OnChangeEventType;
}

export interface GetOrderRequestActionType {
  type: typeof GET_ORDER_REQUEST;
  payload?: null;
}

export interface GetOrderSuccessActionType {
  type: typeof GET_ORDER_SUCCESS;
  payload: OrderModel[];
}

export interface GetOrderFailureActionType {
  type: typeof GET_ORDER_FAILURE;
  payload: Error;
}

export interface PostOrderRequestActionType {
  type: typeof POST_ORDER_REQUEST;
  payload?: any;
}

export interface PostOrderSuccessActionType {
  type: typeof POST_ORDER_SUCCESS;
  payload: any;
}

export interface PostOrderFailureActionType {
  type: typeof POST_ORDER_FAILURE;
  payload: any;
}

export interface DeleteOrderRequestActionType {
  type: typeof DELETE_ORDER_REQUEST;
  payload?: any;
}

export interface DeleteOrderSuccessActionType {
  type: typeof DELETE_ORDER_SUCCESS;
  payload: any;
}

export interface DeleteOrderFailureActionType {
  type: typeof DELETE_ORDER_FAILURE;
  payload: any;
}

export type OrderActionTypes =
  | AnyAction
  | FillFormActionType
  | GetOrderRequestActionType
  | GetOrderSuccessActionType
  | GetOrderFailureActionType
  | PostOrderRequestActionType
  | PostOrderSuccessActionType
  | PostOrderFailureActionType
  | DeleteOrderRequestActionType
  | DeleteOrderSuccessActionType
  | DeleteOrderFailureActionType;
