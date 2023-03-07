import React from 'react';
import { InputPropsType } from 'view/component/common/input/Input.interface';
import * as Styled from 'view/component/common/input/Styled.Input';

const Input = ({
  dataTestId,
  disabled = false,
  readOnly = false,
  maxLength = 999,
  width = '100%',
  height = '36px',
  placeholder = '',
  name,
  value,
  onChangeFunc = () => null,
  onClickFunc = () => null,
}: InputPropsType) => {
  return (
    <Styled.Input
      data-testid={dataTestId}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxLength}
      width={width}
      height={height}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeFunc}
      onClick={onClickFunc}
    ></Styled.Input>
  );
};

export default Input;
