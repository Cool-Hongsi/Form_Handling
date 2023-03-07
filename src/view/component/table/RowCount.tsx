import React from 'react';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import useAppSelector from 'service/hook/useAppSelector';
import { OrderModel } from 'service/model/order';
import { splitArray } from 'service/util/splitArray';
import Select from 'view/component/common/select/Select';
import { splitOrderData } from 'view/redux/order/orderAction';
import * as Styled from 'view/component/table/Styled.RowCount';

const RowCount = () => {
  const {
    getOrderApi: { result }, // Original Data
    tableData: { rowCount },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();

  const onChangeBaseInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const splittedArray: OrderModel[][] = splitArray(result, parseInt(e.target.value));
    dispatch(splitOrderData(splittedArray, parseInt(e.target.value)));
  };

  return (
    <Styled.RowCount>
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
