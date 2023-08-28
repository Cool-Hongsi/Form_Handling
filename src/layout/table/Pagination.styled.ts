import styled from 'styled-components';
import { colorStyle } from 'GlobalStyle.styled';

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  .pagination-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }

  .show-page-status {
    margin-left: 20px;
    color: ${colorStyle.gray};
    font-weight: 600;
    font-size: 0.9rem;
  }
`;
