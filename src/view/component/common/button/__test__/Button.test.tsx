import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonPropsType } from 'view/component/common/button/Button.interface';
import Button from 'view/component/common/button/Button';

const renderComponent = (props: ButtonPropsType) => render(<Button {...props} />);

describe('src/view/component/common/button/Button', () => {
  let props: ButtonPropsType;
  const mockOnClickFunc = jest.fn();

  beforeEach(() => {
    props = {
      dataTestId: 'test-button',
      children: <div>Test Button</div>,
      onClickFunc: mockOnClickFunc,
    };
  });

  it('render Button component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-button')).toBeInTheDocument();
  });
  it('test props values', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-button')).toHaveAttribute('width', '60px'); // default
    expect(getByTestId('test-button')).toHaveTextContent('Test Button');
  });
  it('test onClick event', () => {
    const { getByTestId } = renderComponent(props);
    const testButton = getByTestId('test-button');
    fireEvent.click(testButton);
    expect(mockOnClickFunc).toHaveBeenCalledTimes(1);
  });
});
