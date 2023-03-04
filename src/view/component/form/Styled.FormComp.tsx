import styled from 'styled-components';
import { getResponsiveMediaQuery, globalPadding } from 'Styled.GlobalStyle';

export const FormComp = styled.section`
  border: 2px solid blue;
  padding: ${globalPadding.body};
  display: grid;
  grid-template-columns: 5fr 7fr;
  column-gap: 2rem;
  > div {
    border: 2px solid red;
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
