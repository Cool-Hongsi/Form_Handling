import React from 'react';
import { SelectPropsType } from 'view/component/common/select/Select.interface';
import * as Styled from 'view/component/common/select/Styled.Select';

const Select = ({
  children,
  dataTestId,
  width = '100%',
  height = '40px',
  name,
  value,
  onChangeFunc,
}: SelectPropsType) => {
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
