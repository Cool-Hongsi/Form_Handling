import axios, { AxiosResponse } from 'axios';

const headers = {
  'Content-Type': 'application/json',
  // Other options...
};

export const getOrderRequestApi = async (): Promise<AxiosResponse | Error> => {
  try {
    const result: AxiosResponse = await axios.get('/orders', { headers });
    return result;
  } catch (err) {
    return err as Error;
  }
};
