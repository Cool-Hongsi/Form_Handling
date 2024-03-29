export interface ISelectProps {
  children: JSX.Element | JSX.Element[]; // for <option> tag
  dataTestId: string;
  width?: string;
  height?: string;
  name: string;
  value: string | number;
  onChangeFunc: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
