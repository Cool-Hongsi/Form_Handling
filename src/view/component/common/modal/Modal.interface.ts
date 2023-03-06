export interface ModalPropsType {
  children: JSX.Element | JSX.Element[];
  dataTestId: string;
  width?: string;
  confirmSection?: boolean;
  onClickCloseFunc: () => void;
}
