import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import { addLoadForm, deleteLoadForm, fillForm } from 'redux/order/orderAction';
import Input from 'component/input/Input';
import { INPUT_CONST } from 'const/general';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Modal from 'component/modal/Modal';
import { addressFilter } from 'util/addressFilter';
import DaumPostcode, { Address } from 'react-daum-postcode';
import * as Styled from 'layout/form/LoadForm.styled';

const { LOAD_NAME, LOAD_DATE, LOAD_ADDRESS } = INPUT_CONST;

const LoadForm = () => {
  const {
    inputData: { loadForm },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();
  const [addressModalToggle, setAddressModalToggle] = useState<string>('');

  const addLoadFormFunc = () => {
    dispatch(addLoadForm());
  };

  const deleteLoadFormFunc = (index: number) => {
    dispatch(deleteLoadForm(index));
  };

  // For General OnChange
  const onChangeLoadInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(fillForm({ type: 'loadForm', name: e.target.name, value: e.target.value, index }));
  };

  // For Date & Address OnChange
  const onChangeLoadInputForDateAndAddress = (name: string, value: string, index: number) => {
    dispatch(fillForm({ type: 'loadForm', name, value, index }));
  };

  const addressComplete = (data: Address, index: string) => {
    onChangeLoadInputForDateAndAddress(LOAD_ADDRESS, addressFilter(data), parseInt(index));
    setAddressModalToggle('');
  };

  return (
    <Styled.LoadForm data-testid="loadForm-component">
      {/* Load Form */}
      {loadForm.map((_, index) => {
        return (
          <div key={index}>
            <div className="loadform-row">
              <div className="loadform-row-main-title">상차지 정보</div>
              {index > 0 && (
                <IoIosClose
                  className="delete-loadform-icon"
                  data-testid="delete-loadform"
                  onClick={() => deleteLoadFormFunc(index)}
                />
              )}
            </div>

            {/* NAME */}
            <div className="loadform-input-container">
              <label className="loadform-row-title" data-testid="loadform-name-label">
                담당자
              </label>
              <div>
                <Input
                  dataTestId="loadform-name-input"
                  name={LOAD_NAME}
                  value={loadForm[index][LOAD_NAME].value}
                  // onChangeFunc={(e) => pattern.name.test(e.target.value) && onChangeLoadInput(e, index)}
                  onChangeFunc={(e) => onChangeLoadInput(e, index)}
                />
                {loadForm[index][LOAD_NAME].errorMsg && (
                  <span className="loadform-error-msg" data-testid="loadform-name-error-msg">
                    {loadForm[index][LOAD_NAME].errorMsg}
                  </span>
                )}
              </div>
            </div>

            {/* DATE */}
            <div className="loadform-input-container">
              <label className="loadform-row-title" data-testid="loadform-date-label">
                날짜
              </label>
              <div>
                <DatePicker
                  data-testId="loadform-form-date-input"
                  className="loadform-date-input"
                  name={LOAD_DATE}
                  value={loadForm[index][LOAD_DATE].value}
                  onChange={(date: Date) => {
                    const formattedDate = moment(date).format('YYYY-MM-DD');
                    onChangeLoadInputForDateAndAddress(LOAD_DATE, formattedDate, index);
                  }}
                />
                {loadForm[index][LOAD_DATE].errorMsg && (
                  <span className="loadform-error-msg" data-testid="loadform-date-error-msg">
                    {loadForm[index][LOAD_DATE].errorMsg}
                  </span>
                )}
              </div>
            </div>

            {/* ADDRESS */}
            <div className="loadform-input-container">
              <label className="loadform-row-title" data-testid="loadform-address-label">
                상차지
              </label>
              <div>
                <Input
                  dataTestId="loadform-address-input"
                  readOnly={true}
                  name={LOAD_ADDRESS}
                  value={loadForm[index][LOAD_ADDRESS].value}
                  onClickFunc={() => setAddressModalToggle(index.toString())}
                />
                {loadForm[index][LOAD_ADDRESS].errorMsg && (
                  <span className="loadform-error-msg" data-testid="loadform-address-error-msg">
                    {loadForm[index][LOAD_ADDRESS].errorMsg}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* + Button */}
      {loadForm.length < 3 && (
        <div className="add-loadform" data-testid="add-loadform" onClick={addLoadFormFunc}>
          <IoIosAdd className="add-loadform-icon" />
        </div>
      )}

      {/* Address Modal */}
      {addressModalToggle && (
        <Modal dataTestId="loadform-address-modal" onClickCloseFunc={() => setAddressModalToggle('')}>
          <DaumPostcode onComplete={(data: Address) => addressComplete(data, addressModalToggle)} />
        </Modal>
      )}
    </Styled.LoadForm>
  );
};

export default LoadForm;
