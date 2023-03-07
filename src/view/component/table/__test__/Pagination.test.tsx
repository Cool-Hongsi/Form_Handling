import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/createMockStore';
import { paginationMockData } from 'service/mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { clickPageNavigation } from 'view/redux/order/orderAction';
import { PAGE_CONST } from 'service/const/general';
import Pagination from 'view/component/table/Pagination';

const { GO_FIRST_PAGE, GO_PREVIOUS_PAGE, GO_NEXT_PAGE, GO_LAST_PAGE } = PAGE_CONST;

// Mocking Action (To prevent real execution)
jest.mock('view/redux/order/orderAction', () => ({
  clickPageNavigation: jest.fn(),
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <Pagination />
    </Provider>,
  );

describe('src/view/component/table/Pagination', () => {
  let store: Store;

  beforeEach(() => {
    store = createMockStore({
      orderReducer: paginationMockData,
    });
    store.dispatch = jest.fn();
  });

  it('render Pagination component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('pagination-component')).toBeInTheDocument();
  });

  it('test go first button', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('pagination-go-first-button')).toBeInTheDocument();

    const goFirstButton = getByTestId('pagination-go-first-button');
    fireEvent.click(goFirstButton);
    expect(clickPageNavigation).toHaveBeenCalled();
    expect(clickPageNavigation).toHaveBeenCalledWith(GO_FIRST_PAGE);
  });

  it('test go previous button', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('pagination-go-previous-button')).toBeInTheDocument();

    const goPreviousButton = getByTestId('pagination-go-previous-button');
    fireEvent.click(goPreviousButton);
    expect(clickPageNavigation).toHaveBeenCalled();
    expect(clickPageNavigation).toHaveBeenCalledWith(GO_PREVIOUS_PAGE);
  });

  it('test go next button', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('pagination-go-next-button')).toBeInTheDocument();

    const goNextButton = getByTestId('pagination-go-next-button');
    fireEvent.click(goNextButton);
    expect(clickPageNavigation).toHaveBeenCalled();
    expect(clickPageNavigation).toHaveBeenCalledWith(GO_NEXT_PAGE);
  });

  it('test go last button', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('pagination-go-last-button')).toBeInTheDocument();

    const goLastButton = getByTestId('pagination-go-last-button');
    fireEvent.click(goLastButton);
    expect(clickPageNavigation).toHaveBeenCalled();
    expect(clickPageNavigation).toHaveBeenCalledWith(GO_LAST_PAGE);
  });
});
