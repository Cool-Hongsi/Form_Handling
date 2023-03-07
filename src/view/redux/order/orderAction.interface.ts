import { AnyAction } from 'redux';
import { FORM_ACTION, ORDER_ACTION, TABLE_ACTION } from 'service/const/action';
import { LoadPlace, OrderModel } from 'service/model/order';

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

export interface OnChangeEventType {
  type: string;
  name: string;
  value: string;
  index?: number;
}

export interface AddValidationErrorMsgInputDataType {
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

export interface CopyOrderFormInputDataType {
  baseForm: {
    [key: string]: string | number | null;
  };
  loadForm: LoadPlace[];
}

export interface FillFormActionType {
  type: typeof FILL_FORM;
  payload: OnChangeEventType;
}

export interface AddValidationErrorMsgActionType {
  type: typeof ADD_VALIDATION_ERROR_MSG;
  payload: AddValidationErrorMsgInputDataType;
}

export interface AddLoadFormActionType {
  type: typeof ADD_LOAD_FORM;
  payload?: null;
}

export interface DeleteLoadFormActionType {
  type: typeof DELETE_LOAD_FORM;
  payload: number;
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

export interface SplitOrderDataActionType {
  type: typeof SPLIT_ORDER_DATA;
  payload: {
    splittedArray: OrderModel[][];
    rowCount: number;
  };
}

export interface PostOrderRequestActionType {
  type: typeof POST_ORDER_REQUEST;
  payload?: null;
}

export interface PostOrderSuccessActionType {
  type: typeof POST_ORDER_SUCCESS;
  payload: OrderModel;
}

export interface PostOrderFailureActionType {
  type: typeof POST_ORDER_FAILURE;
  payload: Error;
}

export interface DeleteOrderRequestActionType {
  type: typeof DELETE_ORDER_REQUEST;
  payload?: null;
}

export interface DeleteOrderSuccessActionType {
  type: typeof DELETE_ORDER_SUCCESS;
  payload: string;
}

export interface DeleteOrderFailureActionType {
  type: typeof DELETE_ORDER_FAILURE;
  payload: Error;
}

export interface ClickPageNavigationActionType {
  type: typeof CLICK_PAGE_NAVIGATION;
  payload: string;
}

export interface ClickCheckBoxActionType {
  type: typeof CLICK_CHECK_BOX;
  payload: {
    seqNoList: number[];
    clickType: string;
  };
}

export interface CopyOrderFormActionType {
  type: typeof COPY_ORDER_FORM;
  payload: CopyOrderFormInputDataType;
}

export type OrderActionTypes =
  | AnyAction
  | FillFormActionType
  | AddValidationErrorMsgActionType
  | AddLoadFormActionType
  | DeleteLoadFormActionType
  | GetOrderRequestActionType
  | GetOrderSuccessActionType
  | GetOrderFailureActionType
  | SplitOrderDataActionType
  | PostOrderRequestActionType
  | PostOrderSuccessActionType
  | PostOrderFailureActionType
  | DeleteOrderRequestActionType
  | DeleteOrderSuccessActionType
  | DeleteOrderFailureActionType
  | ClickPageNavigationActionType
  | ClickCheckBoxActionType
  | CopyOrderFormActionType;
