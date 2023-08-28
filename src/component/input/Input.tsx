import React from 'react';
import { IInputProps } from 'component/input/Input.interface';
import * as Styled from 'component/input/Input.styled';

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
}: IInputProps) => {
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
