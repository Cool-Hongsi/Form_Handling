import axios from 'axios';
import { IOrder } from 'model/order';

interface IBodyRequest {
  [key: string]: string | number;
}

// API 결과는 그대로 리턴하고, 사용하는 측에서 Error Handling

export const getOrderRequestApi = async (): Promise<IOrder[]> => {
  const { data } = await axios.get<IOrder[]>('/orders'); // IOrder[] => Axios 'data' type
  return data;
};

export const postOrderRequestApi = async (body: IBodyRequest): Promise<IOrder> => {
  const { data } = await axios.post<IOrder>('/order', body);
  return data;
};

export const deleteOrderRequestApi = async (seqNoList: number[]): Promise<string> => {
  const { data } = await axios.delete<string>(`/order?seqNoList=${JSON.stringify(seqNoList)}`);
  return data;
};
