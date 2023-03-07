import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/createMockStore';
import { formMockData, postOrderApiResultMockData } from 'service/mock/store/orderReducerMockData';
import { Provider } from 'react-redux';
import { postOrderRequest } from 'view/redux/order/orderAction';
import { orderModelMockData } from 'service/mock/data/orderModelMockData';
import { postOrderRequestApi } from 'service/api';
import FormContainer from 'view/component/form';

// Mocking Action (To prevent real execution)
jest.mock('view/redux/order/orderAction', () => ({
  postOrderRequest: jest.fn(),
}));

// Mocking API response with axios
jest.mock('axios', () => ({
  post: (url: string) => {
    if (url.includes('/order')) {
      return Promise.resolve({ status: 200, data: { ...orderModelMockData } });
    }
    return Promise.reject(new Error('API Test error occured (post)'));
  },
}));

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <FormContainer />
    </Provider>,
  );

describe('src/view/component/form', () => {
  let store: Store;

  describe('postOrderApi result is empty', () => {
    beforeEach(() => {
      store = createMockStore({
        orderReducer: formMockData,
      });
      store.dispatch = jest.fn();
    });

    it('render FormContainer component', () => {
      const { getByTestId } = renderComponent(store);
      expect(getByTestId('formContainer-component')).toBeInTheDocument();
    });

    it('test register button', () => {
      const { getByTestId } = renderComponent(store);
      expect(getByTestId('register-button')).toBeInTheDocument();

      const registerButton = getByTestId('register-button');
      fireEvent.click(registerButton);
      expect(postOrderRequest).toHaveBeenCalled();
    });

    it('NOT render post request modal component', () => {
      const { queryByTestId } = renderComponent(store);
      expect(queryByTestId('post-request-result-modal')).not.toBeInTheDocument();
    });
  });

  describe('postOrderApi result is NOT empty', () => {
    beforeEach(() => {
      store = createMockStore({
        orderReducer: postOrderApiResultMockData,
      });
      store.dispatch = jest.fn();
    });

    it('render post request modal component', () => {
      const { getByTestId, queryByTestId } = renderComponent(store);
      expect(getByTestId('post-request-result-modal')).toBeInTheDocument();
      expect(getByTestId('post-request-result-modal')).toHaveTextContent('등록이 완료 되었습니다');
      expect(getByTestId('post-request-result-modal')).toHaveTextContent(JSON.stringify(orderModelMockData));

      expect(getByTestId('click-close-modal')).toBeInTheDocument();
      const closeModalButton = getByTestId('click-close-modal');
      fireEvent.click(closeModalButton);
      expect(queryByTestId('post-request-result-modal')).not.toBeInTheDocument();
    });
  });

  it('test postOrderRequest API', async () => {
    const expectedResult = {
      status: 200,
      data: { ...orderModelMockData },
    };
    const result = await postOrderRequestApi({});
    expect(result).toStrictEqual(expectedResult);
  });
});
