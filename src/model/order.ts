export interface ILoadPlace {
  name: string;
  address: string;
  date: string;
}

export interface IOrder {
  name: string;
  phoneNumber: string;
  fromDate: string;
  toDate: string;
  item: string;
  itemDetail: string;
  supply: string;
  supplyDetail: string | null;
  address: string;
  loadPlace: ILoadPlace[];
  seqNo?: number;
}
