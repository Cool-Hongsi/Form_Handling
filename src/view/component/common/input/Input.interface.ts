export interface InputPropsType {
  dataTestId: string;
  width?: string;
  height?: string;
  placeholder?: string;
  name: string;
  value: string | number;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownFunc?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
