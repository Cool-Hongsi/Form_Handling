import React, { useState, useEffect } from 'react';
import BaseForm from 'layout/form/BaseForm';
import LoadForm from 'layout/form/LoadForm';
import Button from 'component/button/Button';
import Modal from 'component/modal/Modal';
import { useAppDispatch, useAppSelector } from 'store';
import { postOrderRequest } from 'redux/order/orderAction';
import * as Styled from 'layout/form/FormContainer.styled';

const FormContainer = () => {
  const {
    postOrderApi: { result },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();
  const [postRequestModalToggle, setPostRequestModalToggle] = useState<boolean>(false);

  useEffect(() => {
    // Only call when postOrderApi.result value is not empty (means successfully called post request api)
    result && setPostRequestModalToggle(true);
  }, [result]);

  const onSubmitForm = () => {
    // Form Validation in Saga
    dispatch(postOrderRequest());
  };

  return (
    <div data-testid="formContainer-component">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <Styled.FormContainer>
          <BaseForm />
          <LoadForm />
          <Button type="submit" dataTestId="register-button">
            등록
          </Button>
        </Styled.FormContainer>
      </form>

      {/* After Post Request (Only show when post request api is called successfully) */}
      {postRequestModalToggle && (
        <Modal
          dataTestId="post-request-result-modal"
          confirmSection={true}
          onClickCloseFunc={() => setPostRequestModalToggle(false)}
        >
          <div className="post-request-result-modal-title">등록이 완료 되었습니다</div>
          <div>{JSON.stringify(result)}</div>
        </Modal>
      )}
    </div>
  );
};

export default FormContainer;
