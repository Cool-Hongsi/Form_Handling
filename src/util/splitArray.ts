import { IOrder } from 'model/order';

// Create 2D array by 1D array
export const splitArray = (orderList: IOrder[], rowCount: number): IOrder[][] => {
  // Important! => orderList is readonly (= Object.freeze(orderList))
  // To make it writable => use spread operator for copy
  const tempOrderList: IOrder[] = [...orderList];

  const newArray: IOrder[][] = [];
  while (tempOrderList.length) newArray.push(tempOrderList.splice(0, rowCount));
  return newArray;
};
