import React, { useState, useEffect } from 'react';
import BaseForm from 'view/component/form/BaseForm';
import LoadForm from 'view/component/form/LoadForm';
import Button from 'view/component/common/button/Button';
import Modal from 'view/component/common/modal/Modal';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import { postOrderRequest } from 'view/redux/order/orderAction';
import * as Styled from 'view/component/form/Styled.FormContainer';
import useAppSelector from 'service/hook/useAppSelector';

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
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
        <Styled.FormContainer>
          <BaseForm />
          <LoadForm />
          <Button type="submit" dataTestId="register-button" text="등록" />
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
    </>
  );
};

export default FormContainer;
