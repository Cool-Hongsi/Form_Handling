import styled from 'styled-components';
import { colorStyle, getResponsiveMediaQuery } from 'GlobalStyle.styled';

export const LoadForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.3rem;
  ${getResponsiveMediaQuery('sm')} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 0.5rem;
  }

  > div {
    border-radius: 0.375rem;
    border: 1px solid ${colorStyle.lightGray};
    padding: 8px 10px;
    height: 100%;

    .loadform-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .loadform-row-main-title {
      font-size: 1.2rem;
    }

    .delete-loadform-icon {
      font-size: 1.4rem;
      color: ${colorStyle.lightRed};
      cursor: pointer;
    }

    .loadform-input-container {
      margin-top: 0.7rem;

      .loadform-row-title {
        font-weight: 700;
        color: ${colorStyle.dark};
      }

      .loadform-error-msg {
        font-size: 14px;
        color: ${colorStyle.red};
      }

      > div {
        margin-top: 0.4rem;
      }

      .loadform-date-input {
        padding: 0 12px;
        border-radius: 0.375rem;
        border: 1px solid ${colorStyle.lightGray};
        font-size: 1rem;
        width: 100%;
        height: 36px;

        ${getResponsiveMediaQuery('sm')} {
          width: 100%;
        }
      }
    }
  }

  .add-loadform {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .add-loadform-icon {
      font-size: 2.2rem;
      color: ${colorStyle.deepBlue};
    }
  }
`;
