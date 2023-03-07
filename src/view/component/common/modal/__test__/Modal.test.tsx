import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModalPropsType } from 'view/component/common/modal/Modal.interface';
import Modal from 'view/component/common/modal/Modal';

const renderComponent = (props: ModalPropsType) => render(<Modal {...props} />);

describe('src/view/component/common/modal/Modal', () => {
  let props: ModalPropsType;
  const mockOnClickCloseFunc = jest.fn();

  beforeEach(() => {
    props = {
      dataTestId: 'test-modal',
      children: <div>Test Modal</div>,
      confirmSection: true,
      onClickCloseFunc: mockOnClickCloseFunc,
    };
  });

  it('render Modal component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-modal')).toBeInTheDocument();
  });

  it('test props values', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-modal')).toHaveAttribute('width', '500px'); // default
    expect(getByTestId('test-modal')).toHaveTextContent('Test Modal');
  });

  it('test onClick close event', () => {
    const { getByTestId } = renderComponent(props);
    const closeButton = getByTestId('click-close-modal');
    const confirmButton = getByTestId('modal-confirm-section-button');
    fireEvent.click(closeButton);
    expect(mockOnClickCloseFunc).toHaveBeenCalled();
    fireEvent.click(confirmButton);
    expect(mockOnClickCloseFunc).toHaveBeenCalled();
    expect(mockOnClickCloseFunc).toHaveBeenCalledTimes(2);
  });
});
