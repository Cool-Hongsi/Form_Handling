import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/createMockStore';
import { formMockData } from 'service/mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { fillForm, addLoadForm, deleteLoadForm } from 'view/redux/order/orderAction';
import { INPUT_CONST } from 'service/const/general';
import LoadForm from 'view/component/form/LoadForm';

const { LOAD_NAME, LOAD_DATE, LOAD_ADDRESS } = INPUT_CONST;

// Mocking Action (To prevent real execution)
jest.mock('view/redux/order/orderAction', () => ({
  fillForm: jest.fn(),
  addLoadForm: jest.fn(),
  deleteLoadForm: jest.fn(),
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <LoadForm />
    </Provider>,
  );

describe('src/view/component/form/LoadForm', () => {
  let store: Store;

  beforeEach(() => {
    store = createMockStore({
      orderReducer: formMockData,
    });
    store.dispatch = jest.fn();
  });

  it('render LoadForm component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('loadForm-component')).toBeInTheDocument();
  });

  it('test all required input labels', () => {
    const { getAllByTestId } = renderComponent(store);
    for (let i = 0; i < formMockData.inputData.loadForm.length; i++) {
      expect(getAllByTestId('loadform-name-label')[i]).toHaveTextContent('담당자');
      expect(getAllByTestId('loadform-date-label')[i]).toHaveTextContent('날짜');
      expect(getAllByTestId('loadform-address-label')[i]).toHaveTextContent('상차지');
    }
  });

  it('test error message', () => {
    const { getAllByTestId } = renderComponent(store);
    for (let i = 0; i < formMockData.inputData.loadForm.length; i++) {
      expect(getAllByTestId('loadform-name-error-msg')[i]).toHaveTextContent(
        formMockData.inputData.loadForm[i][LOAD_NAME].errorMsg,
      );
      expect(getAllByTestId('loadform-date-error-msg')[i]).toHaveTextContent(
        formMockData.inputData.loadForm[i][LOAD_DATE].errorMsg,
      );
      expect(getAllByTestId('loadform-address-error-msg')[i]).toHaveTextContent(
        formMockData.inputData.loadForm[i][LOAD_ADDRESS].errorMsg,
      );
    }
  });

  it('test each onChange event handling', () => {
    const { getAllByTestId } = renderComponent(store);
    const loadFormNameInput = getAllByTestId('loadform-name-input')[1];
    fireEvent.change(loadFormNameInput, {
      target: {
        value: 'testName',
      },
    });
    expect(fillForm).toHaveBeenCalled();
    expect(fillForm).toHaveBeenCalledWith({ type: 'loadForm', name: LOAD_NAME, value: 'testName', index: 1 });
  });

  it('test address click event handling', () => {
    const { getByTestId, getAllByTestId, queryByTestId } = renderComponent(store);
    const baseFormAddressInput = getAllByTestId('loadform-address-input')[1];
    fireEvent.click(baseFormAddressInput);
    expect(getByTestId('loadform-address-modal')).toBeInTheDocument();

    expect(getByTestId('click-close-modal')).toBeInTheDocument();
    const closeModalButton = getByTestId('click-close-modal');
    fireEvent.click(closeModalButton);
    expect(queryByTestId('loadform-address-modal')).not.toBeInTheDocument();
  });

  it('test add load form button', () => {
    const { getByTestId } = renderComponent(store);
    const addLoadFormButton = getByTestId('add-loadform');
    fireEvent.click(addLoadFormButton);
    expect(addLoadForm).toHaveBeenCalled();
  });

  it('test delete load form button', () => {
    const { getByTestId } = renderComponent(store);
    const deleteLoadFormButton = getByTestId('delete-loadform');
    fireEvent.click(deleteLoadFormButton);
    expect(deleteLoadForm).toHaveBeenCalled();
    expect(deleteLoadForm).toHaveBeenCalledWith(1);
  });
});
