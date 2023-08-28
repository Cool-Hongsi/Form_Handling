/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOrder } from 'model/order';

export interface IOrderState {
  getOrderApi: {
    loading?: boolean;
    error?: Error | null;
    result: IOrder[]; // Original Data
  };
  postOrderApi: {
    loading?: boolean;
    error?: Error | null;
    result: IOrder | null;
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
    splittedResult: IOrder[][]; // Splitted Data For Row Count
    rowCount: number;
    totalPage: number;
    currentPage: number;
    deleteList: number[];
  };
}
