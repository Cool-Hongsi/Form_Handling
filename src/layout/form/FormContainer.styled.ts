import styled from 'styled-components';
import { getResponsiveMediaQuery } from 'GlobalStyle.styled';

export const FormContainer = styled.section`
  display: grid;
  grid-template-columns: 5fr 7fr;
  column-gap: 1.3rem;

  > div {
    margin-bottom: 0.5rem;
  }

  ${getResponsiveMediaQuery('md')} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${getResponsiveMediaQuery('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
