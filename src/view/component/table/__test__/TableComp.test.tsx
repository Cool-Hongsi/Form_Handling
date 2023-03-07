import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/createMockStore';
import { tableCompMockData } from 'service/mock/store/orderReducerMockData';
import { orderModelMockData } from 'service/mock/data/orderModelMockData';
import { Provider } from 'react-redux';
import { clickCheckBox, copyOrderForm } from 'view/redux/order/orderAction';
import { CHECKBOX_CONST } from 'service/const/general';
import { getOrderRequestApi } from 'service/api';
import TableComp from 'view/component/table/TableComp';

const { CLICK_ALL, CLICK_EACH } = CHECKBOX_CONST;

// Mocking Action (To prevent real execution)
jest.mock('view/redux/order/orderAction', () => ({
  getOrderRequest: jest.fn(),
  clickCheckBox: jest.fn(),
  copyOrderForm: jest.fn(),
}));

// Mocking API response with axios
jest.mock('axios', () => ({
  get: (url: string) => {
    if (url.includes('/orders')) {
      return Promise.resolve({ status: 200, data: [orderModelMockData] });
    }
    return Promise.reject(new Error('API Test error occured (get)'));
  },
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <TableComp />
    </Provider>,
  );

describe('src/view/component/table/TableComp', () => {
  let store: Store;

  beforeEach(() => {
    store = createMockStore({
      orderReducer: tableCompMockData,
    });
    store.dispatch = jest.fn();
  });

  it('render TableComp component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('tableComp-component')).toBeInTheDocument();
  });

  it('test click all checkbox', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('click-all-checkBox')).toBeInTheDocument();

    const allCheckBox = getByTestId('click-all-checkBox');
    fireEvent.click(allCheckBox);
    expect(clickCheckBox).toHaveBeenCalled();
    expect(clickCheckBox).toHaveBeenCalledWith([orderModelMockData.seqNo], CLICK_ALL);
  });

  it('test click each checkbox', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('click-each-checkBox')).toBeInTheDocument();

    const eachCheckBox = getByTestId('click-each-checkBox');
    fireEvent.click(eachCheckBox);
    expect(clickCheckBox).toHaveBeenCalled();
    expect(clickCheckBox).toHaveBeenCalledWith([orderModelMockData.seqNo], CLICK_EACH);
  });

  it('test row data', () => {
    const { getByTestId, getAllByTestId } = renderComponent(store);
    expect(getAllByTestId('table-row')).toHaveLength(tableCompMockData.tableData.splittedResult.length);

    expect(getByTestId('row-fromDate-toDate')).toBeInTheDocument();
    expect(getByTestId('row-fromDate-toDate')).toHaveTextContent(
      `${orderModelMockData.fromDate} - ${orderModelMockData.toDate}`,
    );
    expect(getByTestId('row-address')).toBeInTheDocument();
    expect(getByTestId('row-address')).toHaveTextContent(orderModelMockData.address);
  });

  it('test copy order', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('copy-order')).toBeInTheDocument();

    const copyOrder = getByTestId('copy-order');
    fireEvent.click(copyOrder);
    expect(copyOrderForm).toHaveBeenCalled();

    const { loadPlace, ...rest } = orderModelMockData;
    expect(copyOrderForm).toHaveBeenCalledWith({ baseForm: { ...rest }, loadForm: loadPlace });
  });

  it('test getOrderRequest API', async () => {
    const expectedResult = {
      status: 200,
      data: [orderModelMockData],
    };
    const result = await getOrderRequestApi();
    expect(result).toStrictEqual(expectedResult);
  });
});
