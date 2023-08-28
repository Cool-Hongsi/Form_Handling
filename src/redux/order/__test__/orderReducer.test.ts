import { createStore } from 'store';
import { Store } from '@reduxjs/toolkit';
import { orderModelMockData } from 'mock/data/orderModelMockData';
import { INPUT_CONST, PAGE_CONST, CHECKBOX_CONST } from 'const/general';
import {
  IAddValidationErrorMsgInputData,
  ICopyOrderFormInputData,
  IOnChangeEvent,
} from 'redux/order/orderAction.interface';
import {
  addLoadForm,
  addValidationErrorMsg,
  clickCheckBox,
  clickPageNavigation,
  copyOrderForm,
  deleteLoadForm,
  deleteOrderFailure,
  deleteOrderRequest,
  deleteOrderSuccess,
  fillForm,
  getOrderFailure,
  getOrderRequest,
  getOrderSuccess,
  postOrderFailure,
  postOrderRequest,
  postOrderSuccess,
  splitOrderData,
} from 'redux/order/orderAction';

const { BASE_NAME, LOAD_NAME, LOAD_DATE, LOAD_ADDRESS } = INPUT_CONST;
const { GO_NEXT_PAGE } = PAGE_CONST;
const { CLICK_ALL } = CHECKBOX_CONST;

// jest.mock('axios', () => ({}));
window.alert = jest.fn();

describe('src/redux/order/orderReducer', () => {
  const store: Store = createStore();

  describe('get order', () => {
    it('test getOrderRequest action', () => {
      store.dispatch(getOrderRequest());
      expect(store.getState().orderReducer.getOrderApi).toEqual({
        loading: true,
        error: null,
        result: [],
      });
    });
    it('test getOrderSuccess action', () => {
      store.dispatch(getOrderSuccess([orderModelMockData]));
      expect(store.getState().orderReducer.getOrderApi).toEqual({
        loading: false,
        error: null,
        result: [orderModelMockData],
      });
    });
    it('test getOrderFailure action', () => {
      const errorPayload = new Error('Error in getOrderFailure');
      store.dispatch(getOrderFailure(errorPayload));
      expect(store.getState().orderReducer.getOrderApi).toEqual({
        loading: false,
        error: errorPayload,
        result: [],
      });
    });
  });

  describe('post order', () => {
    it('test postOrderRequest action', () => {
      store.dispatch(postOrderRequest());
      expect(store.getState().orderReducer.postOrderApi).toEqual({
        loading: true,
        error: null,
        result: null,
      });
    });
    it('test postOrderSuccess action', () => {
      store.dispatch(postOrderSuccess(orderModelMockData));
      expect(store.getState().orderReducer.postOrderApi).toEqual({
        loading: false,
        error: null,
        result: orderModelMockData,
      });
    });
    it('test postOrderFailure action', () => {
      const errorPayload = new Error('Error in postOrderFailure');
      store.dispatch(postOrderFailure(errorPayload));
      expect(store.getState().orderReducer.postOrderApi).toEqual({
        loading: false,
        error: errorPayload,
        result: null,
      });
    });
  });

  describe('delete order', () => {
    it('test deleteOrderRequest action', () => {
      store.dispatch(deleteOrderRequest());
      expect(store.getState().orderReducer.deleteOrderApi).toEqual({
        loading: true,
        error: null,
        result: '',
      });
    });
    it('test deleteOrderSuccess action', () => {
      store.dispatch(deleteOrderSuccess('Delete Order Success'));
      expect(store.getState().orderReducer.deleteOrderApi).toEqual({
        loading: false,
        error: null,
        result: 'Delete Order Success',
      });
    });
    it('test deleteOrderFailure action', () => {
      const errorPayload = new Error('Error in deleteOrderFailure');
      store.dispatch(deleteOrderFailure(errorPayload));
      expect(store.getState().orderReducer.deleteOrderApi).toEqual({
        loading: false,
        error: errorPayload,
        result: '',
      });
    });
  });

  describe('Additional actions', () => {
    it('test fillForm action', () => {
      const inputData: IOnChangeEvent = {
        type: 'baseForm',
        name: BASE_NAME,
        value: 'test text',
      };
      store.dispatch(fillForm(inputData));
      expect(store.getState().orderReducer.inputData.baseForm[BASE_NAME]).toEqual({
        value: 'test text',
        errorMsg: '',
      });
    });
    it('test addValidationErrorMsg action', () => {
      const inputData: IAddValidationErrorMsgInputData = {
        tempBaseForm: {
          [BASE_NAME]: {
            value: 'test base text',
            errorMsg: 'test base error',
          },
        },
        tempLoadForm: [
          {
            [LOAD_NAME]: {
              value: 'test load text',
              errorMsg: 'test load error',
            },
          },
        ],
      };
      store.dispatch(addValidationErrorMsg(inputData));
      expect(store.getState().orderReducer.inputData.baseForm[BASE_NAME]).toEqual({
        value: 'test base text',
        errorMsg: 'test base error',
      });
      expect(store.getState().orderReducer.inputData.loadForm[0][LOAD_NAME]).toEqual({
        value: 'test load text',
        errorMsg: 'test load error',
      });
    });
    it('test addLoadForm action', () => {
      store.dispatch(addLoadForm());
      expect(store.getState().orderReducer.inputData.loadForm.length).toEqual(2);
    });
    it('test deleteLoadForm action', () => {
      store.dispatch(deleteLoadForm(1));
      expect(store.getState().orderReducer.inputData.loadForm.length).toEqual(1);
    });
    it('test splitOrderData action', () => {
      store.dispatch(splitOrderData([[orderModelMockData]], 1));
      expect(store.getState().orderReducer.tableData).toEqual({
        splittedResult: [[orderModelMockData]],
        currentPage: 0,
        rowCount: 1,
        totalPage: 1,
        deleteList: [],
      });
    });
    it('test clickPageNavigation action', () => {
      store.dispatch(clickPageNavigation(GO_NEXT_PAGE));
      expect(store.getState().orderReducer.tableData.currentPage).toEqual(1);
    });
    it('test clickCheckBox action', () => {
      store.dispatch(clickCheckBox([1, 2, 3], CLICK_ALL));
      expect(store.getState().orderReducer.tableData.deleteList).toEqual([1, 2, 3]);
    });
    it('test copyOrderForm action', () => {
      const copyOrderFormParam: ICopyOrderFormInputData = {
        baseForm: {
          [BASE_NAME]: orderModelMockData.name,
        },
        loadForm: orderModelMockData.loadPlace,
      };
      store.dispatch(copyOrderForm(copyOrderFormParam));
      expect(store.getState().orderReducer.inputData).toEqual({
        baseForm: {
          [BASE_NAME]: {
            value: orderModelMockData.name,
            errorMsg: 'test base error',
          },
        },
        loadForm: [
          {
            [LOAD_NAME]: {
              value: orderModelMockData.loadPlace[0].name,
              errorMsg: 'test load error',
            },
            [LOAD_DATE]: {
              value: orderModelMockData.loadPlace[0].address,
            },
            [LOAD_ADDRESS]: {
              value: orderModelMockData.loadPlace[0].date,
            },
          },
        ],
      });
    });
  });
});
