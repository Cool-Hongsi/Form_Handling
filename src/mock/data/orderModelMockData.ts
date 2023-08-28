import { IOrder } from 'model/order';

export const orderModelMockData: IOrder = {
  name: 'mock_name',
  phoneNumber: 'mock_phoneNumber',
  fromDate: 'mock_fromDate',
  toDate: 'mock_toDate',
  item: 'mock_item',
  itemDetail: 'mock_itemDetail',
  supply: 'mock_supply',
  supplyDetail: 'mock_supplyDetail',
  address: 'mock_address',
  loadPlace: [
    {
      name: 'mock_loadPlace_name',
      date: 'mock_loadPlace_date',
      address: 'mock_loadPlace_address',
    },
  ],
  seqNo: 3,
};
