import React from 'react';
import { ButtonPropsType } from 'view/component/common/button/Button.interface';
import { colorStyle } from 'Styled.GlobalStyle';
import * as Styled from 'view/component/common/button/Styled.Button';

const Button = ({
  dataTestId,
  type = 'button',
  width = '55px',
  height = '35px',
  color = colorStyle.white,
  backgroundColor = colorStyle.deepBlue,
  text,
  onClickFunc = () => null,
}: ButtonPropsType) => {
  return (
    <Styled.Button
      type={type}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      data-testid={dataTestId}
      onClick={onClickFunc}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
