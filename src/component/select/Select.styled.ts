import styled from 'styled-components';
import { ISelectProps } from 'component/select/Select.interface';
import { colorStyle, getResponsiveMediaQuery } from 'GlobalStyle.styled';

export const Select = styled.select<Partial<ISelectProps>>`
  padding: 0 12px;
  border-radius: 0.375rem;
  border: 1px solid ${colorStyle.lightGray};
  font-size: 1rem;

  // -webkit-appearance: none;
  // appearance: none;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${getResponsiveMediaQuery('sm')} {
    width: 100%;
  }
`;
