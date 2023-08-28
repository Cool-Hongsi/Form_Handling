import styled from 'styled-components';
import { colorStyle, getResponsiveMediaQuery } from 'GlobalStyle.styled';

export const BaseForm = styled.div`
  .baseform-row {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin-bottom: 1rem;

    .baseform-row-title {
      padding-right: 12px;
      font-weight: 700;
      color: ${colorStyle.dark};
    }

    .baseform-error-msg {
      font-size: 14px;
      color: ${colorStyle.red};
    }

    .baseform-row-divide {
      display: flex;
      align-items: center;

      .baseform-row-divider {
        margin: 0 10px;
      }

      .baseform-row-divider-hidden {
        visibility: hidden;
      }

      .baseform-date-input {
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
`;
