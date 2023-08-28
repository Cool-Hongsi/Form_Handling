import React from 'react';
import { render } from '@testing-library/react';
import Header from 'layout/header/Header';

const renderComponent = () => render(<Header />);

describe('src/layout/header/Header', () => {
  it('render Header component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('header-component')).toBeInTheDocument();
  });

  it('render Logo correctly', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('logo')).toBeInTheDocument();
  });
});
