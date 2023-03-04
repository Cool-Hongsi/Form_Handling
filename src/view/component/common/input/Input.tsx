import React from 'react';
import { InputPropsType } from 'view/component/common/input/Input.interface';
import * as Styled from 'view/component/common/input/Styled.Input';

const Input = ({
  dataTestId,
  width = '100%',
  height = '40px',
  placeholder = 'Please input',
  name,
  value,
  onChangeFunc,
  onKeyDownFunc = () => null,
}: InputPropsType) => {
  return (
    <Styled.Input
      data-testid={dataTestId}
      width={width}
      height={height}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeFunc}
      onKeyDown={onKeyDownFunc}
    ></Styled.Input>
  );
};

export default Input;
