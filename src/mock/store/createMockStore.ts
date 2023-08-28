import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Store } from '@reduxjs/toolkit';
import { RootState } from 'store';

// only for testing
export const createMockStore = (mockState: Partial<RootState>): Store => {
  const mockStore = configureStore([thunk]);
  const store = mockStore(mockState);
  return store;
};
