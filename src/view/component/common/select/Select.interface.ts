export interface SelectPropsType {
  children: JSX.Element | JSX.Element[]; // for <option> tag
  dataTestId: string;
  width?: string;
  height?: string;
  name: string;
  value: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
