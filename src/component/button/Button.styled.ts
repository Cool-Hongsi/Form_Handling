import styled from 'styled-components';
import { IButtonProps } from 'component/button/Button.interface';

export const Button = styled.button<Partial<IButtonProps>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  font-size: 1rem;
  cursor: ${(props) => (props.cursorActive ? 'pointer' : 'default')};
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.hoverBackgroundColor};
  }
`;
