export interface IModalProps {
  children: JSX.Element | JSX.Element[];
  dataTestId: string;
  width?: string;
  confirmSection?: boolean;
  onClickCloseFunc: () => void;
}
