import styled from 'styled-components';
import { getResponsiveMediaQuery, globalHorizontalPadding, globalMaxWidth } from 'GlobalStyle.styled';

export const Header = styled.header`
  border-bottom: 2px solid rgb(44, 62, 118);

  .header-content {
    max-width: ${globalMaxWidth};
    margin: 0 auto;
    padding: 10px ${globalHorizontalPadding.web};

    ${getResponsiveMediaQuery('sm')} {
      padding: 10px ${globalHorizontalPadding.mobile};
    }

    .logo {
      width: auto;
      height: 40px;
    }
  }
`;
