import React from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { IOrder } from 'model/order';
import { splitArray } from 'util/splitArray';
import Select from 'component/select/Select';
import { splitOrderData } from 'redux/order/orderAction';
import * as Styled from 'layout/table/RowCount.styled';

const RowCount = () => {
  const {
    getOrderApi: { result }, // Original Data
    tableData: { rowCount },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();

  const onChangeBaseInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const splittedArray: IOrder[][] = splitArray(result, parseInt(e.target.value));
    dispatch(splitOrderData(splittedArray, parseInt(e.target.value)));
  };

  return (
    <Styled.RowCount data-testid="rowCount-component">
      <Select
        dataTestId="row-count-select"
        name={'rowCount'}
        value={rowCount}
        onChangeFunc={onChangeBaseInput}
        height={'30px'}
      >
        <option value={20}>20개 보기</option>
        <option value={50}>50개 보기</option>
        <option value={100}>100개 보기</option>
      </Select>
    </Styled.RowCount>
  );
};

export default RowCount;
