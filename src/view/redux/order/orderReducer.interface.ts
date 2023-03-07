/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderModel } from 'service/model/order';

export interface OrderState {
  getOrderApi: {
    loading?: boolean;
    error?: Error | null;
    result: OrderModel[]; // Original Data
  };
  postOrderApi: {
    loading?: boolean;
    error?: Error | null;
    result: OrderModel | null;
  };
  deleteOrderApi: {
    loading?: boolean;
    error?: Error | null;
    result: string;
  };
  inputData: {
    [key: string]: any;
    baseForm: {
      [key: string]: {
        value: string;
        errorMsg: string;
      };
    };
    loadForm: {
      [key: string]: {
        value: string;
        errorMsg: string;
      };
    }[];
  };
  tableData: {
    splittedResult: OrderModel[][]; // Splitted Data For Row Count
    rowCount: number;
    totalPage: number;
    currentPage: number;
    deleteList: number[];
  };
}
