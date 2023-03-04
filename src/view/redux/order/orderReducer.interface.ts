/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderModel } from 'service/model/order';

export interface OrderState {
  loading?: boolean;
  error?: Error | null;
  orderList: OrderModel[];
  inputData: {
    [key: string]: any;
    baseForm: {
      [key: string]: string;
    };
    loadForm: {
      [key: string]: string;
    }[];
  };
}
