import React from 'react';
import { ButtonPropsType } from 'view/component/common/button/Button.interface';
import { colorStyle } from 'Styled.GlobalStyle';
import * as Styled from 'view/component/common/button/Styled.Button';

const Button = ({
  dataTestId,
  type = 'button',
  width = '60px',
  height = '35px',
  color = colorStyle.white,
  backgroundColor = colorStyle.deepBlue,
  hoverBackgroundColor = colorStyle.deepBlueHover,
  border = 'none',
  borderRadius = '5px',
  cursorActive = true,
  children,
  onClickFunc = () => null,
}: ButtonPropsType) => {
  return (
    <Styled.Button
      type={type}
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      border={border}
      borderRadius={borderRadius}
      cursorActive={cursorActive}
      data-testid={dataTestId}
      onClick={onClickFunc}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
