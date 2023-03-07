import styled from 'styled-components';
import { colorStyle, globalPadding } from 'Styled.GlobalStyle';

export const Pagination = styled.div`
  margin-top: ${globalPadding.body};
  display: flex;
  align-items: center;

  .pagination-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
  }

  .show-page-status {
    margin-left: 20px;
    color: ${colorStyle.gray};
    font-weight: bold;
  }
`;
