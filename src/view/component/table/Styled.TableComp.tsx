import styled from 'styled-components';
import { colorStyle } from 'Styled.GlobalStyle';

export const TableCompLoading = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableCompError = styled.div`
  display: flex;
  justify-content: center;
  color: ${colorStyle.red};
`;

export const TableComp = styled.div`
  border: 1px solid red;
`;
