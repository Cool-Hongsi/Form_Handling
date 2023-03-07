import styled from 'styled-components';
import { globalPadding } from 'Styled.GlobalStyle';

export const TableContainer = styled.section`
  padding: 0 ${globalPadding.body} ${globalPadding.body} ${globalPadding.body};
`;

export const TableTopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TableBottomSection = styled.div`
  display: flex;
  justify-content: center;
`;
