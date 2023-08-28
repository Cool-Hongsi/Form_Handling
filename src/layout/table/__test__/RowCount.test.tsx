import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'mock/store/createMockStore';
import { paginationMockData } from 'mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { splitOrderData } from 'redux/order/orderAction';
import RowCount from 'layout/table/RowCount';

// Mocking Action (To prevent real execution)
jest.mock('redux/order/orderAction', () => ({
  splitOrderData: jest.fn(),
}));

// Mocking General Function (To prevent real execution)
jest.mock('util/splitArray', () => ({
  splitArray: jest.fn().mockReturnValue([]),
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <RowCount />
    </Provider>,
  );

describe('src/layout/table/RowCount', () => {
  let store: Store;

  beforeEach(() => {
    store = createMockStore({
      orderReducer: paginationMockData,
    });
    store.dispatch = jest.fn();
  });

  it('render RowCount component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('rowCount-component')).toBeInTheDocument();
  });

  it('test row count select', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('row-count-select')).toBeInTheDocument();

    const rowCountSelect = getByTestId('row-count-select');
    fireEvent.change(rowCountSelect, {
      target: { value: 10 },
    });
    expect(splitOrderData).toHaveBeenCalled();
  });
});
