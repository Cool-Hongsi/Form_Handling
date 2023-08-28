import { IOrder } from 'model/order';

const getLocalStorage = (key: string): IOrder[] | null => {
  const jsonValue: string | null = localStorage.getItem(key);
  if (jsonValue) return JSON.parse(jsonValue);
  return null;
};

const setLocalStorage = (key: string, value: IOrder) => {
  const getLocalStorageData: IOrder[] | null = getLocalStorage(key);
  if (getLocalStorageData) {
    getLocalStorageData.push(value);
    localStorage.setItem(key, JSON.stringify(getLocalStorageData));
    return;
  }
  localStorage.setItem(key, JSON.stringify([value]));
};

const removeLocalStorage = (key: string, index: number) => {
  const getLocalStorageData: IOrder[] | null = getLocalStorage(key);
  getLocalStorageData?.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(getLocalStorageData));
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
