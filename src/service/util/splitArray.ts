import { OrderModel } from 'service/model/order';

// Create 2D array by 1D array
export const splitArray = (orderList: OrderModel[], rowCount: number): OrderModel[][] => {
  // Important! => orderList is readonly (= Object.freeze(orderList))
  // To make it writable => use spread operator for copy
  const tempOrderList: OrderModel[] = [...orderList];

  const newArray: OrderModel[][] = [];
  while (tempOrderList.length) newArray.push(tempOrderList.splice(0, rowCount));
  return newArray;
};
