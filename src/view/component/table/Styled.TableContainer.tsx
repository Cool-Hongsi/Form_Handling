import styled from 'styled-components';
import { globalPadding } from 'Styled.GlobalStyle';

export const TableContainer = styled.section`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 ${globalPadding.body} ${globalPadding.body} ${globalPadding.body};
`;
