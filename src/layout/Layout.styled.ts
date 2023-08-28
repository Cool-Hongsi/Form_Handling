import styled from 'styled-components';
import { getResponsiveMediaQuery, globalHorizontalPadding, globalMaxWidth } from 'GlobalStyle.styled';

export const Layout = styled.div`
  main {
    max-width: ${globalMaxWidth};
    margin: 0 auto;
    padding: 30px ${globalHorizontalPadding.web};

    ${getResponsiveMediaQuery('sm')} {
      padding: 30px ${globalHorizontalPadding.mobile};
    }
  }
`;
