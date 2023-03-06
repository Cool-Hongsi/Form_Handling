/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderModel } from 'service/model/order';

export interface OrderState {
  getOrderApi: {
    loading: boolean;
    error: Error | null;
    result: OrderModel[];
  };
  postOrderApi: {
    loading: boolean;
    error: Error | null;
    result: OrderModel | null;
  };
  deleteOrderApi: {
    loading: boolean;
    error: Error | null;
    result: number[];
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
}
