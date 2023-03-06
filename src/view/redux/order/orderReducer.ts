import produce from 'immer';
import { Reducer } from 'redux';
import { FORM_ACTION, ORDER_ACTION } from 'service/const/action';
import { INPUT_CONST } from 'service/const/input';
import { OrderState } from 'view/redux/order/orderReducer.interface';
import { OrderActionTypes } from 'view/redux/order/orderAction.interface';

const { FILL_FORM, ADD_VALIDATION_ERROR_MSG, ADD_LOAD_FORM, DELETE_LOAD_FORM } = FORM_ACTION;

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
    result: [],
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
        const newLoadForm = {
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
        };
        draft.inputData.loadForm.push(newLoadForm);
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
        draft.deleteOrderApi.result = [];
        break;
      default:
        return state;
    }
  });
};

export default orderReducer;
