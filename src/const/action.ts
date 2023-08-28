const FORM_ACTION = {
  FILL_FORM: 'FILL_FORM',
  ADD_VALIDATION_ERROR_MSG: 'ADD_VALIDATION_ERROR_MSG',
  ADD_LOAD_FORM: 'ADD_LOAD_FORM',
  DELETE_LOAD_FORM: 'DELETE_LOAD_FORM',
};

const ORDER_ACTION = {
  GET_ORDER_REQUEST: 'GET_ORDER_REQUEST',
  GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS', // Store Order Data (1D Array) (Original)
  GET_ORDER_FAILURE: 'GET_ORDER_FAILURE',
  SPLIT_ORDER_DATA: 'SPLIT_ORDER_DATA', // Store Order Data (2D Array) (Splitted)
  POST_ORDER_REQUEST: 'POST_ORDER_REQUEST',
  POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS',
  POST_ORDER_FAILURE: 'POST_ORDER_FAILURE',
  DELETE_ORDER_REQUEST: 'DELETE_ORDER_REQUEST',
  DELETE_ORDER_SUCCESS: 'DELETE_ORDER_SUCCESS',
  DELETE_ORDER_FAILURE: 'DELETE_ORDER_FAILURE',
};

const TABLE_ACTION = {
  CLICK_PAGE_NAVIGATION: 'CLICK_PAGE_NAVIGATION',
  CLICK_CHECK_BOX: 'CLICK_CHECK_BOX',
  COPY_ORDER_FORM: 'COPY_ORDER_FORM',
};

export { FORM_ACTION, ORDER_ACTION, TABLE_ACTION };