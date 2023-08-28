import { AnyAction } from 'redux';
import { FORM_ACTION, ORDER_ACTION, TABLE_ACTION } from 'const/action';
import { ILoadPlace, IOrder } from 'model/order';

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

export interface IOnChangeEvent {
  type: string;
  name: string;
  value: string;
  index?: number;
}

export interface IAddValidationErrorMsgInputData {
  tempBaseForm: {
    [key: string]: {
      value: string;
      errorMsg: string;
    };
  };
  tempLoadForm: {
    [key: string]: {
      value: string;
      errorMsg: string;
    };
  }[];
}

export interface ICopyOrderFormInputData {
  baseForm: {
    [key: string]: string | number | null;
  };
  loadForm: ILoadPlace[];
}

export interface IFillFormAction {
  type: typeof FILL_FORM;
  payload: IOnChangeEvent;
}

export interface IAddValidationErrorMsgAction {
  type: typeof ADD_VALIDATION_ERROR_MSG;
  payload: IAddValidationErrorMsgInputData;
}

export interface IAddLoadFormAction {
  type: typeof ADD_LOAD_FORM;
  payload?: null;
}

export interface IDeleteLoadFormAction {
  type: typeof DELETE_LOAD_FORM;
  payload: number;
}

export interface IGetOrderRequestAction {
  type: typeof GET_ORDER_REQUEST;
  payload?: null;
}

export interface IGetOrderSuccessAction {
  type: typeof GET_ORDER_SUCCESS;
  payload: IOrder[];
}

export interface IGetOrderFailureAction {
  type: typeof GET_ORDER_FAILURE;
  payload: Error;
}

export interface ISplitOrderDataAction {
  type: typeof SPLIT_ORDER_DATA;
  payload: {
    splittedArray: IOrder[][];
    rowCount: number;
  };
}

export interface IPostOrderRequestAction {
  type: typeof POST_ORDER_REQUEST;
  payload?: null;
}

export interface IPostOrderSuccessAction {
  type: typeof POST_ORDER_SUCCESS;
  payload: IOrder;
}

export interface IPostOrderFailureAction {
  type: typeof POST_ORDER_FAILURE;
  payload: Error;
}

export interface IDeleteOrderRequestAction {
  type: typeof DELETE_ORDER_REQUEST;
  payload?: null;
}

export interface IDeleteOrderSuccessAction {
  type: typeof DELETE_ORDER_SUCCESS;
  payload: string;
}

export interface IDeleteOrderFailureAction {
  type: typeof DELETE_ORDER_FAILURE;
  payload: Error;
}

export interface IClickPageNavigationAction {
  type: typeof CLICK_PAGE_NAVIGATION;
  payload: string;
}

export interface IClickCheckBoxAction {
  type: typeof CLICK_CHECK_BOX;
  payload: {
    seqNoList: number[];
    clickType: string;
  };
}

export interface ICopyOrderFormAction {
  type: typeof COPY_ORDER_FORM;
  payload: ICopyOrderFormInputData;
}

export type OrderActionTypes =
  | AnyAction
  | IFillFormAction
  | IAddValidationErrorMsgAction
  | IAddLoadFormAction
  | IDeleteLoadFormAction
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderFailureAction
  | ISplitOrderDataAction
  | IPostOrderRequestAction
  | IPostOrderSuccessAction
  | IPostOrderFailureAction
  | IDeleteOrderRequestAction
  | IDeleteOrderSuccessAction
  | IDeleteOrderFailureAction
  | IClickPageNavigationAction
  | IClickCheckBoxAction
  | ICopyOrderFormAction;
