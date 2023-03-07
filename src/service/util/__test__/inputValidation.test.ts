/* eslint-disable @typescript-eslint/no-explicit-any */
import { inputValidation } from 'service/util/inputValidation';
import { INPUT_CONST } from 'service/const/general';
import { defaultMockData } from 'service/mock/store/orderReducerMockData';
import { OrderState } from 'view/redux/order/orderReducer.interface';

const { BASE_NAME, BASE_PHONE_NUMBER, BASE_FROM_DATE, BASE_TO_DATE } = INPUT_CONST;

describe('src/service/util/inputValidation', () => {
  const tempDefaultMockData: OrderState = defaultMockData;

  it('test validation (값을 입력 해주세요)', () => {
    const result: any = inputValidation(tempDefaultMockData);
    expect(result.tempBaseForm[BASE_NAME].errorMsg).toStrictEqual('값을 입력 해주세요');
  });
  it('test validation (한글, 영어, 공백만 입력 가능 합니다)', () => {
    tempDefaultMockData.inputData.baseForm[BASE_NAME].value = '123';
    const result: any = inputValidation(tempDefaultMockData);
    expect(result.tempBaseForm[BASE_NAME].errorMsg).toStrictEqual('한글, 영어, 공백만 입력 가능 합니다');
  });
  it('test validation (알맞은 핸드폰 번호 형식을 입력 해주세요)', () => {
    tempDefaultMockData.inputData.baseForm[BASE_PHONE_NUMBER].value = '123123';
    const result: any = inputValidation(tempDefaultMockData);
    expect(result.tempBaseForm[BASE_PHONE_NUMBER].errorMsg).toStrictEqual('알맞은 핸드폰 번호 형식을 입력 해주세요');
  });
  it('test validation (시작날짜 보다 종료날짜가 더 크도록 입력 해주세요)', () => {
    tempDefaultMockData.inputData.baseForm[BASE_FROM_DATE].value = '2023-03-04';
    tempDefaultMockData.inputData.baseForm[BASE_TO_DATE].value = '2023-03-02';
    const result: any = inputValidation(tempDefaultMockData);
    expect(result.tempBaseForm[BASE_TO_DATE].errorMsg).toStrictEqual(
      '시작날짜 보다 종료날짜가 더 크도록 입력 해주세요',
    );
  });
});
