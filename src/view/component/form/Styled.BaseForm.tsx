import styled from 'styled-components';
import { colorStyle, getResponsiveMediaQuery } from 'Styled.GlobalStyle';

export const BaseForm = styled.div`
  border: 2px solid green;

  // column-gap: 2rem;
  .baseform-row {
    border: 2px solid red;
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin-bottom: 1rem;

    .baseform-row-title {
      padding-right: 12px;
      font-weight: 700;
      color: ${colorStyle.dark};
    }
  }
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
