/* eslint-disable @typescript-eslint/no-explicit-any */
import produce from 'immer';
import { Reducer } from 'redux';
import { FORM_ACTION, ORDER_ACTION, TABLE_ACTION } from 'service/const/action';
import { INPUT_CONST, PAGE_CONST, CHECKBOX_CONST } from 'service/const/general';
import { OrderState } from 'view/redux/order/orderReducer.interface';
import { OrderActionTypes } from 'view/redux/order/orderAction.interface';

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

const { CLICK_PAGE_NAVIGATION, CLICK_CHECK_BOX, COPY_ORDER_FORM } = TABLE_ACTION;

const { GO_PREVIOUS_PAGE, GO_NEXT_PAGE, GO_LAST_PAGE } = PAGE_CONST;

const { CLICK_ALL } = CHECKBOX_CONST;

const INITIAL_STATE: OrderState = {
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
    rowCount: 20, // default
    totalPage: 0,
    currentPage: 0,
    deleteList: [],
  },
};

const orderReducer: Reducer<OrderState, OrderActionTypes> = (
  state = INITIAL_STATE,
  action: OrderActionTypes,
): OrderState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FILL_FORM:
        const { type, name, value, index } = action.payload; // index => nullable

        if (type === 'baseForm') {
          draft.inputData[type][name].value = value;
        }
        // type === 'loadForm
        else {
          draft.inputData[type][index][name].value = value;
        }
        break;
      case ADD_VALIDATION_ERROR_MSG:
        const { tempBaseForm, tempLoadForm } = action.payload;
        draft.inputData.baseForm = tempBaseForm;
        draft.inputData.loadForm = tempLoadForm;
        break;
      case ADD_LOAD_FORM:
        draft.inputData.loadForm.push({
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
        });
        break;
      case DELETE_LOAD_FORM:
        draft.inputData.loadForm.splice(action.payload, 1);
        break;
      case GET_ORDER_REQUEST:
        draft.getOrderApi.loading = true;
        draft.getOrderApi.error = null;
        break;
      case GET_ORDER_SUCCESS:
        draft.getOrderApi.loading = false;
        draft.getOrderApi.error = null;
        draft.getOrderApi.result = action.payload;
        break;
      case GET_ORDER_FAILURE:
        draft.getOrderApi.loading = false;
        draft.getOrderApi.error = action.payload;
        draft.getOrderApi.result = [];
        break;
      case SPLIT_ORDER_DATA:
        const { splittedArray, rowCount } = action.payload;
        draft.tableData.splittedResult = splittedArray;
        draft.tableData.totalPage = splittedArray.length;
        draft.tableData.rowCount = rowCount;
        draft.tableData.currentPage = 0;
        draft.tableData.deleteList = [];
        break;
      case POST_ORDER_REQUEST:
        draft.postOrderApi.loading = true;
        draft.postOrderApi.error = null;
        break;
      case POST_ORDER_SUCCESS:
        draft.postOrderApi.loading = false;
        draft.postOrderApi.error = null;
        draft.postOrderApi.result = action.payload;
        break;
      case POST_ORDER_FAILURE:
        draft.postOrderApi.loading = false;
        draft.postOrderApi.error = action.payload;
        draft.postOrderApi.result = null;
        break;
      case DELETE_ORDER_REQUEST:
        draft.deleteOrderApi.loading = true;
        draft.deleteOrderApi.error = null;
        break;
      case DELETE_ORDER_SUCCESS:
        draft.deleteOrderApi.loading = false;
        draft.deleteOrderApi.error = null;
        draft.deleteOrderApi.result = action.payload;
        break;
      case DELETE_ORDER_FAILURE:
        draft.deleteOrderApi.loading = false;
        draft.deleteOrderApi.error = action.payload;
        draft.deleteOrderApi.result = '';
        break;
      case CLICK_PAGE_NAVIGATION:
        if (action.payload === GO_NEXT_PAGE) draft.tableData.currentPage++;
        else if (action.payload === GO_LAST_PAGE) draft.tableData.currentPage = draft.tableData.totalPage - 1;
        else if (action.payload === GO_PREVIOUS_PAGE) draft.tableData.currentPage--;
        else draft.tableData.currentPage = 0;

        draft.tableData.deleteList = [];
        break;
      case CLICK_CHECK_BOX:
        const { seqNoList, clickType } = action.payload;
        if (clickType === CLICK_ALL) {
          if (draft.tableData.deleteList.length > 0) {
            draft.tableData.deleteList = [];
          } else {
            draft.tableData.deleteList = seqNoList;
          }
        } else {
          seqNoList.forEach((seqNo: number) => {
            const index = draft.tableData.deleteList.indexOf(seqNo);
            if (index === -1) {
              draft.tableData.deleteList.push(seqNo);
            } else {
              draft.tableData.deleteList.splice(index, 1);
            }
          });
        }
        draft.tableData.deleteList.sort((a, b) => a - b);
        break;
      case COPY_ORDER_FORM:
        const { baseForm, loadForm } = action.payload;

        Object.entries(baseForm).forEach((form: any) => {
          draft.inputData.baseForm[form[0]] = { ...draft.inputData.baseForm[form[0]], value: form[1] ?? '' };
        });

        loadForm.forEach((form: any, index: number) => {
          // Just in case, copy multiple loadForm!
          if (draft.inputData.loadForm.length === index) {
            draft.inputData.loadForm.push({
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
            });
          } else if (draft.inputData.loadForm.length > 1 && index === 0) {
            draft.inputData.loadForm.splice(1, 2);
          }
          Object.entries(form).forEach((entry: any) => {
            draft.inputData.loadForm[index] = {
              ...draft.inputData.loadForm[index],
              [entry[0]]: { ...draft.inputData.loadForm[index][entry[0]], value: entry[1] ?? '' },
            };
          });
        });
        break;
      default:
        return state;
    }
  });
};

export default orderReducer;
