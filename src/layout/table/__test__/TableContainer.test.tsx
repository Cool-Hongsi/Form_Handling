import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'mock/store/createMockStore';
import { defaultMockData, deleteOrderApiResultMockData } from 'mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { deleteOrderRequest } from 'redux/order/orderAction';
import { deleteOrderRequestApi } from 'api';
import TableContainer from 'layout/table/TableContainer';

// Mocking Action (To prevent real execution)
jest.mock('redux/order/orderAction', () => ({
  getOrderRequest: jest.fn(),
  deleteOrderRequest: jest.fn(),
}));

// Mocking API response with axios
jest.mock('axios', () => ({
  delete: (url: string) => {
    if (url.includes('/order?seqNoList=')) {
      return Promise.resolve({ data: 'delete test' });
    }
    return Promise.reject(new Error('API Test error occured (delete)'));
  },
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <TableContainer />
    </Provider>,
  );

describe('src/layout/table/TableContainer', () => {
  let store: Store;

  describe('deleteOrderApi result is empty', () => {
    beforeEach(() => {
      store = createMockStore({
        orderReducer: defaultMockData,
      });
      store.dispatch = jest.fn();
    });

    it('render TableContainer component', () => {
      const { getByTestId } = renderComponent(store);
      expect(getByTestId('tableContainer-component')).toBeInTheDocument();
    });

    it('test delete button', () => {
      const { getByTestId } = renderComponent(store);
      expect(getByTestId('delete-button')).toBeInTheDocument();

      const deleteButton = getByTestId('delete-button');
      fireEvent.click(deleteButton);
      expect(deleteOrderRequest).toHaveBeenCalled();
    });

    it('NOT render delete request modal component', () => {
      const { queryByTestId } = renderComponent(store);
      expect(queryByTestId('delete-request-result-modal')).not.toBeInTheDocument();
    });
  });

  describe('deleteOrderApi result is NOT empty', () => {
    beforeEach(() => {
      store = createMockStore({
        orderReducer: deleteOrderApiResultMockData,
      });
      store.dispatch = jest.fn();
    });

    it('render delete request modal component', () => {
      const { getByTestId, queryByTestId } = renderComponent(store);
      expect(getByTestId('delete-request-result-modal')).toBeInTheDocument();
      expect(getByTestId('delete-request-result-modal')).toHaveTextContent('삭제가 완료 되었습니다');
      expect(getByTestId('delete-request-result-modal')).toHaveTextContent('Test Data');

      expect(getByTestId('click-close-modal')).toBeInTheDocument();
      const closeModalButton = getByTestId('click-close-modal');
      fireEvent.click(closeModalButton);
      expect(queryByTestId('delete-request-result-modal')).not.toBeInTheDocument();
    });
  });

  it('test deleteOrderRequest API', async () => {
    const expectedResult = 'delete test';
    const result = await deleteOrderRequestApi([]);
    expect(result).toStrictEqual(expectedResult);
  });
});
