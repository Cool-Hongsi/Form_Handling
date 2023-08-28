/**
 * These are for testing orderReducer mock data
 */

import { IOrderState } from 'redux/order/orderReducer.interface';
import { orderModelMockData } from 'mock/data/orderModelMockData';
import { INPUT_CONST } from 'const/general';

const {
  BASE_NAME,
  BASE_PHONE_NUMBER,
  BASE_FROM_DATE,
  BASE_TO_DATE,
  BASE_ITEM,
  BASE_ITEM_DETAIL,
  BASE_SUPPLY,
  BASE_SUPPLY_DETAIL,
  BASE_ADDRESS,
  LOAD_NAME,
  LOAD_DATE,
  LOAD_ADDRESS,
} = INPUT_CONST;

// Default
export const defaultMockData: IOrderState = {
  getOrderApi: {
    loading: false,
    error: null,
    result: [],
  },
  postOrderApi: {
    loading: false,
    error: null,
    result: null,
  },
  deleteOrderApi: {
    loading: false,
    error: null,
    result: '',
  },
  inputData: {
    baseForm: {
      [BASE_NAME]: {
        value: '',
        errorMsg: '',
      },
      [BASE_PHONE_NUMBER]: {
        value: '',
        errorMsg: '',
      },
      [BASE_FROM_DATE]: {
        value: '',
        errorMsg: '',
      },
      [BASE_TO_DATE]: {
        value: '',
        errorMsg: '',
      },
      [BASE_ITEM]: {
        value: '',
        errorMsg: '',
      },
      [BASE_ITEM_DETAIL]: {
        value: '',
        errorMsg: '',
      },
      [BASE_SUPPLY]: {
        value: '',
        errorMsg: '',
      },
      [BASE_SUPPLY_DETAIL]: {
        value: '',
        errorMsg: '',
      },
      [BASE_ADDRESS]: {
        value: '',
        errorMsg: '',
      },
    },
    loadForm: [
      {
        [LOAD_NAME]: {
          value: '',
          errorMsg: '',
        },
        [LOAD_DATE]: {
          value: '',
          errorMsg: '',
        },
        [LOAD_ADDRESS]: {
          value: '',
          errorMsg: '',
        },
      },
    ],
  },
  tableData: {
    splittedResult: [],
    rowCount: 20,
    totalPage: 0,
    currentPage: 0,
    deleteList: [],
  },
};

// DeleteOrderApi Result
export const deleteOrderApiResultMockData: IOrderState = {
  ...defaultMockData,
  deleteOrderApi: { result: 'Test Data' },
};

// PostOrderApi Result
export const postOrderApiResultMockData: IOrderState = {
  ...defaultMockData,
  postOrderApi: { result: orderModelMockData },
};

// Pagination
export const paginationMockData: IOrderState = {
  ...defaultMockData,
  tableData: { splittedResult: [], rowCount: 0, totalPage: 5, currentPage: 1, deleteList: [] },
};

// TableComp
export const tableCompMockData: IOrderState = {
  ...defaultMockData,
  tableData: {
    splittedResult: [[orderModelMockData]],
    rowCount: 0,
    totalPage: 5,
    currentPage: 0,
    deleteList: [1, 2, 3],
  },
};

// Form Mock Data (With Error Message)
export const formMockData: IOrderState = {
  ...defaultMockData,
  inputData: {
    baseForm: {
      [BASE_NAME]: {
        value: '',
        errorMsg: 'BASE_NAME_ERROR',
      },
      [BASE_PHONE_NUMBER]: {
        value: '',
        errorMsg: 'BASE_PHONE_NUMBER_ERROR',
      },
      [BASE_FROM_DATE]: {
        value: '',
        errorMsg: 'BASE_FROM_DATE_ERROR',
      },
      [BASE_TO_DATE]: {
        value: '',
        errorMsg: 'BASE_TO_DATE_ERROR',
      },
      [BASE_ITEM]: {
        value: '',
        errorMsg: 'BASE_ITEM_ERROR',
      },
      [BASE_ITEM_DETAIL]: {
        value: '',
        errorMsg: 'BASE_ITEM_DETAIL_ERROR',
      },
      [BASE_SUPPLY]: {
        value: '',
        errorMsg: 'BASE_SUPPLY_ERROR',
      },
      [BASE_SUPPLY_DETAIL]: {
        value: '',
        errorMsg: 'BASE_SUPPLY_DETAIL_ERROR',
      },
      [BASE_ADDRESS]: {
        value: '',
        errorMsg: 'BASE_ADDRESS_ERROR',
      },
    },
    loadForm: [
      {
        [LOAD_NAME]: {
          value: '',
          errorMsg: 'LOAD_NAME_ERROR_0',
        },
        [LOAD_DATE]: {
          value: '',
          errorMsg: 'LOAD_DATE_ERROR_0',
        },
        [LOAD_ADDRESS]: {
          value: '',
          errorMsg: 'LOAD_ADDRESS_ERROR_0',
        },
      },
      {
        [LOAD_NAME]: {
          value: '',
          errorMsg: 'LOAD_NAME_ERROR_1',
        },
        [LOAD_DATE]: {
          value: '',
          errorMsg: 'LOAD_DATE_ERROR_1',
        },
        [LOAD_ADDRESS]: {
          value: '',
          errorMsg: 'LOAD_ADDRESS_ERROR_1',
        },
      },
    ],
  },
};
