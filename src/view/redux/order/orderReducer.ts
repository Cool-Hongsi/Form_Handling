import produce from 'immer';
import { Reducer } from 'redux';
import { FORM_ACTION, ORDER_ACTION } from 'service/const/action';
import { INPUT_CONST } from 'service/const/input';
import { OrderState } from 'view/redux/order/orderReducer.interface';
import { OrderActionTypes } from 'view/redux/order/orderAction.interface';

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
  loading: false,
  error: null,
  orderList: [],
  inputData: {
    baseForm: {
      [BASE_NAME]: '',
      [BASE_PHONE_NUMBER]: '',
      [BASE_FROM_DATE]: '',
      [BASE_TO_DATE]: '',
      [BASE_ITEM]: '',
      [BASE_ITEM_DETAIL]: '',
      [BASE_SUPPLY]: '',
      [BASE_SUPPLY_DETAIL]: '',
      [BASE_ADDRESS]: '',
    },
    loadForm: [
      {
        [LOAD_NAME]: '',
        [LOAD_DATE]: '',
        [LOAD_ADDRESS]: '',
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
        const { type, name, value } = action.payload;
        draft.inputData[type][name] = value;
        break;
      case GET_ORDER_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case GET_ORDER_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.orderList = action.payload;
        break;
      case GET_ORDER_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        draft.orderList = [];
        break;
      case POST_ORDER_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case POST_ORDER_SUCCESS:
        draft.loading = false;
        draft.error = null;
        break;
      case POST_ORDER_FAILURE:
        draft.loading = false;
        draft.error = null;
        break;
      case DELETE_ORDER_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case DELETE_ORDER_SUCCESS:
        draft.loading = false;
        draft.error = null;
        break;
      case DELETE_ORDER_FAILURE:
        draft.loading = false;
        draft.error = null;
        break;
      default:
        return state;
    }
  });
};

export default orderReducer;
