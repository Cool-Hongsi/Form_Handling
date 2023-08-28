/* eslint-disable @typescript-eslint/no-explicit-any */
import { IOrderState } from 'redux/order/orderReducer.interface';
import { INPUT_CONST } from 'const/general';
import pattern from 'util/inputPattern';
import moment from 'moment';

const {
  BASE_SEQ_NO,
  BASE_NAME,
  BASE_PHONE_NUMBER,
  BASE_FROM_DATE,
  BASE_TO_DATE,
  BASE_ITEM,
  BASE_ITEM_DETAIL,
  BASE_SUPPLY,
  BASE_SUPPLY_DETAIL,
  BASE_ADDRESS,
  LOAD_NAME,
  LOAD_DATE,
  LOAD_ADDRESS,
} = INPUT_CONST;

const formFormatter = (tempform: any, key: string, value: string | number, errorMsg: string) => {
  return {
    ...tempform,
    [key]: {
      value,
      errorMsg,
    },
  };
};

/**
 * isInvalid = true => validation fail
 *
 * isInvalid = false => validation success
 * @param orderReducer
 * @returns tempBaseForm, tempLoadForm, isInvalid
 */
export const inputValidation = (orderReducer: IOrderState) => {
  const { baseForm, loadForm } = orderReducer.inputData;

  /******************** BaseForm Validation */
  let tempBaseForm = {};
  let tempBaseFromDate = ''; // For comparing with ToDate
  let tempBaseItem = ''; // For checking '직접입력'
  let tempBaseSupply = ''; // For checking number in supply detail

  Object.entries(baseForm).forEach((entry: any) => {
    if (
      !entry[1].value &&
      entry[0] !== BASE_ITEM_DETAIL &&
      entry[0] !== BASE_SUPPLY &&
      entry[0] !== BASE_SUPPLY_DETAIL
    ) {
      tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '값을 입력 해주세요');
    } else {
      // BASE_SEQ_NO (No need validation)
      if (entry[0] === BASE_SEQ_NO) {
        tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
      }
      // BASE_NAME
      if (entry[0] === BASE_NAME) {
        if (pattern.name.test(entry[1].value)) {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
        } else {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '한글, 영어, 공백만 입력 가능 합니다');
        }
      }
      // BASE_PHONE_NUMBER
      if (entry[0] === BASE_PHONE_NUMBER) {
        if (pattern.fullPhone.test(entry[1].value)) {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
        } else {
          tempBaseForm = formFormatter(
            tempBaseForm,
            entry[0],
            entry[1].value,
            '알맞은 핸드폰 번호 형식을 입력 해주세요',
          );
        }
      }
      // BASE_FROM_DATE
      if (entry[0] === BASE_FROM_DATE) {
        tempBaseFromDate = entry[1].value;
        tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
      }
      // BASE_TO_DATE
      if (entry[0] === BASE_TO_DATE) {
        if (tempBaseFromDate) {
          const isBefore = moment(tempBaseFromDate).isBefore(entry[1].value);
          if (isBefore) {
            tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
          } else {
            tempBaseForm = formFormatter(
              tempBaseForm,
              entry[0],
              entry[1].value,
              '시작날짜 보다 종료날짜가 더 크도록 입력 해주세요',
            );
          }
        } else {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
        }
      }
      // BASE_ITEM
      if (entry[0] === BASE_ITEM) {
        if (entry[1].value === '직접입력') {
          tempBaseItem = 'Active_Item_Detail';
        } else {
          tempBaseItem = 'InActive_Item_Detail';
        }
        tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
      }
      // BASE_ITEM_DETAIL
      if (entry[0] === BASE_ITEM_DETAIL) {
        if (tempBaseItem === 'Active_Item_Detail' && !entry[1].value) {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '값을 입력 해주세요');
        } else {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
        }
      }
      // BASE_SUPPLY
      if (entry[0] === BASE_SUPPLY) {
        if (entry[1].value) {
          tempBaseSupply = 'Active_Supply_Detail';
        } else {
          tempBaseSupply = 'InActive_Supply_Detail';
        }
        tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
      }
      // BASE_SUPPLY_DETAIL
      if (entry[0] === BASE_SUPPLY_DETAIL) {
        if (tempBaseSupply === 'Active_Supply_Detail' && !entry[1].value && !pattern.phone.test(entry[1].value)) {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '숫자만 입력 가능 합니다');
        } else {
          tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
        }
      }
      // BASE_ADDRESS
      if (entry[0] === BASE_ADDRESS) {
        tempBaseForm = formFormatter(tempBaseForm, entry[0], entry[1].value, '');
      }
    }
  });

  /******************** LoadForm Validation */
  const tempLoadFormList: any = [];
  let tempLoadForm = {};

  loadForm.forEach((load) => {
    Object.entries(load).forEach((entry: any) => {
      if (!entry[1].value) {
        tempLoadForm = formFormatter(tempLoadForm, entry[0], entry[1].value, '값을 입력 해주세요');
      } else {
        // LOAD_NAME
        if (entry[0] === LOAD_NAME) {
          if (pattern.name.test(entry[1].value)) {
            tempLoadForm = formFormatter(tempLoadForm, entry[0], entry[1].value, '');
          } else {
            tempLoadForm = formFormatter(tempLoadForm, entry[0], entry[1].value, '한글, 영어, 공백만 입력 가능 합니다');
          }
        }
        // LOAD_DATE || LOAD_ADDRESS
        if (entry[0] === LOAD_DATE || entry[0] === LOAD_ADDRESS) {
          tempLoadForm = formFormatter(tempLoadForm, entry[0], entry[1].value, '');
        }
      }
    });

    tempLoadFormList.push(tempLoadForm);
  });

  /******************** BaseForm Validation Result */
  const tempBaseFormResult = Object.values(tempBaseForm).map((baseForm: any) => {
    if (baseForm.errorMsg) {
      return false;
    } else {
      return true;
    }
  });

  /******************** LoadForm Validation Result */
  const tempLoadFormResult = tempLoadFormList.map((tempLoadForm: any) => {
    return Object.values(tempLoadForm).map((loadForm: any) => {
      if (loadForm.errorMsg) {
        return false;
      } else {
        return true;
      }
    });
  });

  // tempLoadFormResult => 2D array (Make it as 1D array)
  const filteredTempLoadFormResult = [].concat(...tempLoadFormResult);

  // Check any of 'false' value
  const isInvalid = [...tempBaseFormResult, ...filteredTempLoadFormResult].some((value: boolean) => !value);

  // isInvalid = true => validation fail
  // isInvalid = false => validation success

  return { tempBaseForm, tempLoadForm: tempLoadFormList, isInvalid };
};
