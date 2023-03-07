import styled from 'styled-components';
import { colorStyle, getResponsiveMediaQuery } from 'Styled.GlobalStyle';

export const TableCompLoading = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableCompError = styled.div`
  display: flex;
  justify-content: center;
  color: ${colorStyle.red};
`;

export const TableComp = styled.div`
  ${getResponsiveMediaQuery('sm')} {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    border-left: 1px solid ${colorStyle.lightGray};
    border-right: 1px solid ${colorStyle.lightGray};
  }

  .table-container {
    width: 100%;
    border: 1px solid ${colorStyle.lightGray};
    border-collapse: collapse;
    thead {
      background-color: ${colorStyle.gray};
    }

    th {
      padding: 6px;
      font-size: 0.9rem;
    }

    td {
      padding: 5px 10px;
      font-size: 0.85rem;
      font-weight: 200;
    }

    th,
    td {
      text-align: center;
      border: 1px solid ${colorStyle.lightGray};
    }

    .th-checkBox {
      width: 30px;
      min-width: 30px;
    }
    .th-general {
      width: 100px;
      min-width: 30px;
    }

    .checkBox-creator {
      width: 12px;
      height: 12px;
      background-color: ${colorStyle.white};
      border: 2px solid ${colorStyle.darkGray};
      border-radius: 2px;
      margin: 0 auto;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .checkbox-tooltip {
        visibility: hidden;
        width: max-content;
        background-color: ${colorStyle.white};
        color: ${colorStyle.dark};
        border: 1px solid ${colorStyle.dark};
        font-size: 0.6rem;
        font-weight: 300;
        padding: 5px;

        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        top: 14px;
        left: 14px;
      }
    }

    .fill-background {
      background-color: ${colorStyle.blue};
      color: ${colorStyle.white};
      border: none;
    }

    .checkBox-creator:hover .checkbox-tooltip {
      visibility: visible;
    }

    .td-copy-order {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
