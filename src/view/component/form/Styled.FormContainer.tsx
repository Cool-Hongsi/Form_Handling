import styled from 'styled-components';
import { getResponsiveMediaQuery, globalPadding } from 'Styled.GlobalStyle';

export const FormContainer = styled.section`
  border: 2px solid blue;
  padding: ${globalPadding.body};
  display: grid;
  grid-template-columns: 5fr 7fr;
  column-gap: 1.3rem;

  > div {
    border: 2px solid red;
    margin-bottom: 0.5rem;
  }

  ${getResponsiveMediaQuery('md')} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${getResponsiveMediaQuery('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
