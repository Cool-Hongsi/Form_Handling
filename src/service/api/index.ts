import axios, { AxiosResponse } from 'axios';

interface BodyType {
  [key: string]: string | number;
}

export const getOrderRequestApi = async (): Promise<AxiosResponse | Error> => {
  try {
    const result: AxiosResponse = await axios.get(`/orders`);
    return result;
  } catch (err) {
    return err as Error;
  }
};

export const postOrderRequestApi = async (body: BodyType): Promise<AxiosResponse | Error> => {
  try {
    const result: AxiosResponse = await axios.post(`/order`, body);
    return result;
  } catch (err) {
    return err as Error;
  }
};

export const deleteOrderRequestApi = async (seqNoList: number[]): Promise<AxiosResponse | Error> => {
  try {
    const result: AxiosResponse = await axios.delete(`/order?seqNoList=${JSON.stringify(seqNoList)}`);
    return result;
  } catch (err) {
    return err as Error;
  }
};
