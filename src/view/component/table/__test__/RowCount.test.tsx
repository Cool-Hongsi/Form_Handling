import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/createMockStore';
import { paginationMockData } from 'service/mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { splitOrderData } from 'view/redux/order/orderAction';
import RowCount from 'view/component/table/RowCount';

// Mocking Action (To prevent real execution)
jest.mock('view/redux/order/orderAction', () => ({
  splitOrderData: jest.fn(),
}));

// Mocking General Function (To prevent real execution)
jest.mock('service/util/splitArray', () => ({
  splitArray: jest.fn().mockReturnValue([]),
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <RowCount />
    </Provider>,
  );

describe('src/view/component/table/RowCount', () => {
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
