import React from 'react';
import { ISelectProps } from 'component/select/Select.interface';
import * as Styled from 'component/select/Select.styled';

const Select = ({ children, dataTestId, width = '100%', height = '36px', name, value, onChangeFunc }: ISelectProps) => {
  return (
    <Styled.Select
      data-testid={dataTestId}
      width={width}
      height={height}
      name={name}
      value={value}
      onChange={onChangeFunc}
    >
      {children}
    </Styled.Select>
  );
};

export default Select;
