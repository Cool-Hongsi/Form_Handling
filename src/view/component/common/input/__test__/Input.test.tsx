import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputPropsType } from 'view/component/common/input/Input.interface';
import Input from 'view/component/common/input/Input';

const renderComponent = (props: InputPropsType) => render(<Input {...props} />);

describe('src/view/component/common/input/Input', () => {
  let props: InputPropsType;
  const mockOnChangeFunc = jest.fn();
  const mockOnClickFunc = jest.fn();

  beforeEach(() => {
    props = {
      dataTestId: 'test-input',
      name: 'testInputName',
      value: '',
      onChangeFunc: mockOnChangeFunc,
      onClickFunc: mockOnClickFunc,
    };
  });

  it('render Input component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-input')).toBeInTheDocument();
  });
  it('test props values', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-input')).toHaveAttribute('width', '100%'); // default
    expect(getByTestId('test-input')).toHaveAttribute('name', 'testInputName');
  });
  it('test onChange event', () => {
    const { getByTestId } = renderComponent(props);
    const testInput = getByTestId('test-input');
    fireEvent.change(testInput, {
      target: {
        value: 'test1',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(1);
    fireEvent.change(testInput, {
      target: {
        value: 'test2',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(2);
  });
  it('test onClickFunc event', () => {
    const { getByTestId } = renderComponent(props);
    const testInput = getByTestId('test-input');
    fireEvent.click(testInput);
    expect(mockOnClickFunc).toHaveBeenCalledTimes(1);
  });
});
