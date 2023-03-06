export interface ButtonPropsType {
  dataTestId: string;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  text: string;
  onClickFunc?: () => void;
}
