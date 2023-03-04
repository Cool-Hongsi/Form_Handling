import styled from 'styled-components';
import { getResponsiveMediaQuery } from 'Styled.GlobalStyle';

export const App = styled.div`
  ${getResponsiveMediaQuery('sm')} {
    color: red;
  }
  ${getResponsiveMediaQuery('md')} {
    color: blue;
  }
  ${getResponsiveMediaQuery('lg')} {
    color: black;
  }
`;
