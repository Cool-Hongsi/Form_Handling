import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/createMockStore';
import { formMockData } from 'service/mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { fillForm } from 'view/redux/order/orderAction';
import { INPUT_CONST } from 'service/const/general';
import BaseForm from 'view/component/form/BaseForm';

const { BASE_NAME, BASE_PHONE_NUMBER, BASE_FROM_DATE, BASE_ITEM, BASE_SUPPLY_DETAIL, BASE_ADDRESS } = INPUT_CONST;

// Mocking Action (To prevent real execution)
jest.mock('view/redux/order/orderAction', () => ({
  fillForm: jest.fn(),
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <BaseForm />
    </Provider>,
  );

describe('src/view/component/form/BaseForm', () => {
  let store: Store;

  beforeEach(() => {
    store = createMockStore({
      orderReducer: formMockData,
    });
    store.dispatch = jest.fn();
  });

  it('render BaseForm component', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('baseForm-component')).toBeInTheDocument();
  });

  it('test all required input labels', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('baseform-name-label')).toHaveTextContent('이름');
    expect(getByTestId('baseform-phoneNumber-label')).toHaveTextContent('휴대폰번호');
    expect(getByTestId('baseform-date-label')).toHaveTextContent('날짜');
    expect(getByTestId('baseform-item-label')).toHaveTextContent('품목');
    expect(getByTestId('baseform-supply-label')).toHaveTextContent('물량');
    expect(getByTestId('baseform-address-label')).toHaveTextContent('출근지');
  });

  it('test error message', () => {
    const { getByTestId } = renderComponent(store);
    expect(getByTestId('baseform-name-error-msg')).toHaveTextContent(
      formMockData.inputData.baseForm[BASE_NAME].errorMsg,
    );
    expect(getByTestId('baseform-phoneNumber-error-msg')).toHaveTextContent(
      formMockData.inputData.baseForm[BASE_PHONE_NUMBER].errorMsg,
    );
    expect(getByTestId('baseform-fromDate-error-msg')).toHaveTextContent(
      formMockData.inputData.baseForm[BASE_FROM_DATE].errorMsg,
    );
    expect(getByTestId('baseform-item-error-msg')).toHaveTextContent(
      formMockData.inputData.baseForm[BASE_ITEM].errorMsg,
    );
    expect(getByTestId('baseform-supplyDetail-error-msg')).toHaveTextContent(
      formMockData.inputData.baseForm[BASE_SUPPLY_DETAIL].errorMsg,
    );
    expect(getByTestId('baseform-address-error-msg')).toHaveTextContent(
      formMockData.inputData.baseForm[BASE_ADDRESS].errorMsg,
    );
  });

  it('test each onChange event handling', () => {
    const { getByTestId } = renderComponent(store);
    const baseFormNameInput = getByTestId('baseform-name-input');
    fireEvent.change(baseFormNameInput, {
      target: {
        value: 'testName',
      },
    });
    expect(fillForm).toHaveBeenCalled();
    expect(fillForm).toHaveBeenCalledWith({ type: 'baseForm', name: BASE_NAME, value: 'testName' });

    const baseFormPhoneNumberInput = getByTestId('baseform-phoneNumber-input');
    fireEvent.change(baseFormPhoneNumberInput, {
      target: {
        value: '12345678900',
      },
    });
    expect(fillForm).toHaveBeenCalled();
    expect(fillForm).toHaveBeenCalledWith({ type: 'baseForm', name: BASE_PHONE_NUMBER, value: '123-4567-8900' });
  });

  it('test address click event handling', () => {
    const { getByTestId, queryByTestId } = renderComponent(store);
    const baseFormAddressInput = getByTestId('baseform-address-input');
    fireEvent.click(baseFormAddressInput);
    expect(getByTestId('baseform-address-modal')).toBeInTheDocument();

    expect(getByTestId('click-close-modal')).toBeInTheDocument();
    const closeModalButton = getByTestId('click-close-modal');
    fireEvent.click(closeModalButton);
    expect(queryByTestId('baseform-address-modal')).not.toBeInTheDocument();
  });
});
