import React from 'react';
import { ModalPropsType } from 'view/component/common/modal/Modal.interface';
import Button from 'view/component/common/button/Button';
import { IoIosClose } from 'react-icons/io';
import * as Styled from 'view/component/common/modal/Styled.Modal';

const Modal = ({ children, dataTestId, width = '500px', confirmSection = false, onClickCloseFunc }: ModalPropsType) => {
  return (
    <Styled.Modal data-testid={dataTestId} width={width}>
      <div className="modal-container">
        <div className="modal-title">
          <IoIosClose className="modal-close-icon" onClick={onClickCloseFunc} />
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
