import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

const renderComponent = () => render(<App />);

describe('src/App', () => {
  it('renders App component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('app-component')).toBeInTheDocument();
  });
});
