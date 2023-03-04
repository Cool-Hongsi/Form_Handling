/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Input from 'view/component/common/input/Input';
import { INPUT_CONST } from 'service/const/input';
import useAppSelector from 'service/hook/useAppSelector';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import { fillForm } from 'view/redux/order/orderAction';
import * as Styled from 'view/component/form/Styled.BaseForm';

const {
  BASE_NAME,
  BASE_PHONE_NUMBER,
  BASE_FROM_DATE,
  BASE_TO_DATE,
  BASE_ITEM,
  BASE_ITEM_DETAIL,
  BASE_SUPPLY,
  BASE_SUPPLY_DETAIL,
  BASE_ADDRESS,
} = INPUT_CONST;

const BaseForm = () => {
  const { inputData } = useAppSelector((state) => state.orderReducer);
  const dipsatch = useAppDispatch();

  const onChangeBaseInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dipsatch(fillForm({ type: 'baseForm', name: e.target.name, value: e.target.value }));
  };

  // Validation Check => Once clicking submit button!

  return (
    <Styled.BaseForm>
      <div className="baseform-row">
        <div className="baseform-row-title">이름</div>
        <Input
          dataTestId="base-name-input"
          name={BASE_NAME}
          value={inputData.baseForm[BASE_NAME]}
          onChangeFunc={onChangeBaseInput}
        />
      </div>
      <div className="baseform-row">
        <div className="baseform-row-title">휴대폰번호</div>
        <Input
          dataTestId="base-phone-number-input"
          name={BASE_PHONE_NUMBER}
          value={inputData.baseForm[BASE_PHONE_NUMBER]}
          onChangeFunc={onChangeBaseInput}
        />
      </div>
    </Styled.BaseForm>
  );
};

export default BaseForm;
