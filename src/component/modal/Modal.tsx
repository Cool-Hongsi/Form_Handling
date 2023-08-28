import React from 'react';
import { IModalProps } from 'component/modal/Modal.interface';
import Button from 'component/button/Button';
import { IoIosClose } from 'react-icons/io';
import * as Styled from 'component/modal/Modal.styled';

const Modal = ({ children, dataTestId, width = '500px', confirmSection = false, onClickCloseFunc }: IModalProps) => {
  return (
    <Styled.Modal data-testid={dataTestId} width={width}>
      <div className="modal-container">
        <div className="modal-title">
          <IoIosClose className="modal-close-icon" data-testid="click-close-modal" onClick={onClickCloseFunc} />
        </div>
        <div className="modal-content">{children}</div>
        {confirmSection && (
          <div className="modal-confirm-section">
            <Button dataTestId="modal-confirm-section-button" onClickFunc={onClickCloseFunc}>
              확인
            </Button>
          </div>
        )}
      </div>
    </Styled.Modal>
  );
};

export default Modal;
