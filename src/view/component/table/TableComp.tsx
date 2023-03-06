import React, { useEffect } from 'react';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import useAppSelector from 'service/hook/useAppSelector';
import { getOrderRequest } from 'view/redux/order/orderAction';
import * as Styled from 'view/component/table/Styled.TableComp';

const TableComp = () => {
  const dispatch = useAppDispatch();
  const {
    getOrderApi: { loading, error, result },
  } = useAppSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getOrderRequest());
  }, [dispatch]);

  if (loading) {
    return <Styled.TableCompLoading>Loading...</Styled.TableCompLoading>;
  }

  if (error) {
    return <Styled.TableCompError>{error.message}</Styled.TableCompError>;
  }

  return <Styled.TableComp>{result.toString()}</Styled.TableComp>;
};

export default TableComp;
