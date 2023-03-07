import styled from 'styled-components';
import { ModalPropsType } from 'view/component/common/modal/Modal.interface';
import { colorStyle, getResponsiveMediaQuery } from 'Styled.GlobalStyle';

export const Modal = styled.div<Partial<ModalPropsType>>`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .modal-container {
    margin-top: 2.5rem;
    border-radius: 10px;
    background-color: ${colorStyle.white};
    width: ${(props) => props.width};

    ${getResponsiveMediaQuery('md')} {
      width: 500px;
    }
    ${getResponsiveMediaQuery('sm')} {
      width: 80%;
    }

    .modal-title {
      border-bottom: 1px solid ${colorStyle.lightGray};
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 0.5rem;

      .modal-close-icon {
        font-size: 2.5rem;
        color: ${colorStyle.darkGray};
        cursor: pointer;
      }
    }

    .modal-content {
      padding: 1.4rem 1.2rem;
      word-break: break-all;

      .post-request-result-modal-title,
      .delete-request-result-modal-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }

    .modal-confirm-section {
      border-top: 1px solid ${colorStyle.lightGray};
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1.2rem;
    }
  }
`;
