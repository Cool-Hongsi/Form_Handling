import React, { useState } from 'react';
import Input from 'view/component/common/input/Input';
import Select from 'view/component/common/select/Select';
import { INPUT_CONST } from 'service/const/general';
import useAppSelector from 'service/hook/useAppSelector';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import { fillForm } from 'view/redux/order/orderAction';
import pattern from 'service/util/inputPattern';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DaumPostcode, { Address } from 'react-daum-postcode';
import Modal from 'view/component/common/modal/Modal';
import { addressFilter } from 'service/util/addressFilter';
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
  const {
    inputData: { baseForm },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();
  const [addressModalToggle, setAddressModalToggle] = useState<boolean>(false);

  // For General OnChange
  const onChangeBaseInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch(fillForm({ type: 'baseForm', name: e.target.name, value: e.target.value }));
  };

  // For Date & Address OnChange
  const onChangeBaseInputForDateAndAddress = (name: string, value: string) => {
    dispatch(fillForm({ type: 'baseForm', name, value }));
  };

  const addressComplete = (data: Address) => {
    onChangeBaseInputForDateAndAddress(BASE_ADDRESS, addressFilter(data));
    setAddressModalToggle(false);
  };

  return (
    <Styled.BaseForm data-testid="baseForm-component">
      {/* NAME */}
      <div className="baseform-row">
        <label className="baseform-row-title" data-testid="baseform-name-label">
          이름
        </label>
        <div>
          <Input
            dataTestId="baseform-name-input"
            name={BASE_NAME}
            value={baseForm[BASE_NAME].value}
            // onChangeFunc={(e) => pattern.name.test(e.target.value) && onChangeBaseInput(e)}
            onChangeFunc={onChangeBaseInput}
          />
          {baseForm[BASE_NAME].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-name-error-msg">
              {baseForm[BASE_NAME].errorMsg}
            </span>
          )}
        </div>
      </div>

      {/* PHONE NUMBER */}
      <div className="baseform-row">
        <label className="baseform-row-title" data-testid="baseform-phoneNumber-label">
          휴대폰번호
        </label>
        <div>
          <Input
            dataTestId="baseform-phoneNumber-input"
            maxLength={13}
            name={BASE_PHONE_NUMBER}
            value={baseForm[BASE_PHONE_NUMBER].value}
            onChangeFunc={(e) => {
              if (pattern.phone.test(e.target.value)) {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, '')
                  .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                  .replace(/(\-{1,2})$/g, '');
                onChangeBaseInput(e);
              }
              if (!e.target.value) {
                onChangeBaseInput(e);
              }
            }}
          />
          {baseForm[BASE_PHONE_NUMBER].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-phoneNumber-error-msg">
              {baseForm[BASE_PHONE_NUMBER].errorMsg}
            </span>
          )}
        </div>
      </div>

      {/* FROM & TO DATE */}
      <div className="baseform-row">
        <label className="baseform-row-title" data-testid="baseform-date-label">
          날짜
        </label>
        <div>
          <div className="baseform-row-divide">
            <DatePicker
              data-testId="baseform-fromDate-input"
              className="baseform-date-input"
              name={BASE_FROM_DATE}
              value={baseForm[BASE_FROM_DATE].value}
              onChange={(date: Date) => {
                const formattedDate = moment(date).format('YYYY-MM-DD');
                onChangeBaseInputForDateAndAddress(BASE_FROM_DATE, formattedDate);
              }}
            />
            <span className="baseform-row-divider">~</span>
            <DatePicker
              data-testId="baseform-toDate-input"
              className="baseform-date-input"
              name={BASE_TO_DATE}
              value={baseForm[BASE_TO_DATE].value}
              onChange={(date: Date) => {
                const formattedDate = moment(date).format('YYYY-MM-DD');
                onChangeBaseInputForDateAndAddress(BASE_TO_DATE, formattedDate);
              }}
            />
          </div>
          {baseForm[BASE_FROM_DATE].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-fromDate-error-msg">
              {baseForm[BASE_FROM_DATE].errorMsg}
            </span>
          )}
          {!baseForm[BASE_FROM_DATE].errorMsg && baseForm[BASE_TO_DATE].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-toDate-error-msg">
              {baseForm[BASE_TO_DATE].errorMsg}
            </span>
          )}
        </div>
      </div>

      {/* ITEM & DETAIL */}
      <div className="baseform-row">
        <label className="baseform-row-title" data-testid="baseform-item-label">
          품목
        </label>
        <div>
          <div className="baseform-row-divide">
            <Select
              dataTestId="baseform-item-select"
              name={BASE_ITEM}
              value={baseForm[BASE_ITEM].value}
              onChangeFunc={onChangeBaseInput}
            >
              <option value="">선택</option>
              <option value="냉장품">냉장품</option>
              <option value="냉동품">냉동품</option>
              <option value="직접입력">직접입력</option>
            </Select>
            <span className="baseform-row-divider baseform-row-divider-hidden">~</span>
            <Input
              dataTestId="baseform-item-input"
              disabled={baseForm[BASE_ITEM].value === '직접입력' ? false : true}
              name={BASE_ITEM_DETAIL}
              value={baseForm[BASE_ITEM_DETAIL].value}
              onChangeFunc={onChangeBaseInput}
            />
          </div>
          {baseForm[BASE_ITEM].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-item-error-msg">
              {baseForm[BASE_ITEM].errorMsg}
            </span>
          )}
          {baseForm[BASE_ITEM_DETAIL].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-itemDetail-error-msg">
              {baseForm[BASE_ITEM_DETAIL].errorMsg}
            </span>
          )}
        </div>
      </div>

      {/* SUPPLY & DETAIL */}
      <div className="baseform-row">
        <label className="baseform-row-title" data-testid="baseform-supply-label">
          물량
        </label>
        <div>
          <div className="baseform-row-divide">
            <Select
              dataTestId="baseform-supply-select"
              name={BASE_SUPPLY}
              value={baseForm[BASE_SUPPLY].value}
              onChangeFunc={onChangeBaseInput}
            >
              <option value="">선택</option>
              <option value="PLT">PLT</option>
              <option value="BOX">BOX</option>
              <option value="EA">EA</option>
            </Select>
            <span className="baseform-row-divider baseform-row-divider-hidden">~</span>
            <Input
              dataTestId="baseform-supply-input"
              disabled={baseForm[BASE_SUPPLY].value === '' ? true : false}
              name={BASE_SUPPLY_DETAIL}
              value={baseForm[BASE_SUPPLY_DETAIL].value}
              onChangeFunc={(e) => pattern.supplyDetail.test(e.target.value) && onChangeBaseInput(e)}
            />
          </div>
          {baseForm[BASE_SUPPLY_DETAIL].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-supplyDetail-error-msg">
              {baseForm[BASE_SUPPLY_DETAIL].errorMsg}
            </span>
          )}
        </div>
      </div>

      {/* ADDRESS */}
      <div className="baseform-row">
        <label className="baseform-row-title" data-testid="baseform-address-label">
          출근지
        </label>
        <div>
          <Input
            dataTestId="baseform-address-input"
            readOnly={true}
            name={BASE_ADDRESS}
            value={baseForm[BASE_ADDRESS].value}
            onClickFunc={() => setAddressModalToggle(true)}
          />
          {baseForm[BASE_ADDRESS].errorMsg && (
            <span className="baseform-error-msg" data-testid="baseform-address-error-msg">
              {baseForm[BASE_ADDRESS].errorMsg}
            </span>
          )}
        </div>
      </div>
      {addressModalToggle && (
        <Modal dataTestId="baseform-address-modal" onClickCloseFunc={() => setAddressModalToggle(false)}>
          <DaumPostcode onComplete={addressComplete} />
        </Modal>
      )}
    </Styled.BaseForm>
  );
};

export default BaseForm;
