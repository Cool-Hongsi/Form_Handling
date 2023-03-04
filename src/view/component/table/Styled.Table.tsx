import styled from 'styled-components';
import { colorStyle, globalPadding } from 'Styled.GlobalStyle';

export const TableLoading = styled.section`
  padding: ${globalPadding.body};
  display: flex;
  justify-content: center;
`;

export const TableError = styled.section`
  padding: ${globalPadding.body};
  display: flex;
  justify-content: center;
  color: ${colorStyle.red};
`;

export const Table = styled.section`
  padding: ${globalPadding.body};
`;
