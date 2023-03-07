import { ReactNode } from 'react';

export interface ButtonPropsType {
  dataTestId: string;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  border?: string;
  borderRadius?: string;
  cursorActive?: boolean;
  children: ReactNode;
  onClickFunc?: () => void;
}
