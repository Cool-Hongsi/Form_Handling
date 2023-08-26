import styled from 'styled-components';
import { globalPadding } from 'Styled.GlobalStyle';

export const Header = styled.header`
  border-bottom: 2px solid rgb(44, 62, 118);
  padding: ${globalPadding.header};

  .logo {
    width: auto;
    height: 40px;
  }
`;
