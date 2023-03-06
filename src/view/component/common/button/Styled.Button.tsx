import styled from 'styled-components';
import { colorStyle } from 'Styled.GlobalStyle';
import { ButtonPropsType } from 'view/component/common/button/Button.interface';

export const Button = styled.button<Partial<ButtonPropsType>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${colorStyle.deepBlueHover};
  }
`;
