interface LoadPlace {
  name: string;
  address: string;
  date: string;
}

export interface OrderModel {
  name: string;
  phoneNumber: string;
  fromDate: string;
  toDate: string;
  item: string;
  itemDetail: string;
  supply: string;
  supplyDetail: string | null;
  address: string;
  loadPlace: LoadPlace[];
  seqNo: number;
}
