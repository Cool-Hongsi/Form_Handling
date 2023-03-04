import React, { useEffect } from 'react';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import useAppSelector from 'service/hook/useAppSelector';
import { getOrderRequest } from 'view/redux/order/orderAction';
import * as Styled from 'view/component/table/Styled.Table';

const Table = () => {
  const dispatch = useAppDispatch();
  const { loading, error, orderList } = useAppSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getOrderRequest());
  }, [dispatch]);

  if (loading) {
    return <Styled.TableLoading>Loading...</Styled.TableLoading>;
  }

  if (error) {
    return <Styled.TableError>{error.message}</Styled.TableError>;
  }

  return <Styled.Table>{orderList.toString()}</Styled.Table>;
};

export default Table;
