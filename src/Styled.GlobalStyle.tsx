import { createGlobalStyle } from 'styled-components';

/**
 * Get global padding
 ** header (10px)
 ** body (1rem)
 */
export const globalPadding = {
  header: '10px',
  body: '1rem',
};

export const colorStyle = {
  dark: '#212529',
  lightGrey: '#CED4DA',
  red: '#FF0000',

  black: '#000000',
  lightDark: '#555555',
  grey: '#E0E0E0',
  darkGrey: '#A3A3A3',
  white: '#FFFFFF',
};

export const responsiveSize = {
  sm: '768px',
  md: '991px',
  lg: '992px',
};

/**
 * Get specific responsive media query
 ** sm - 0 ~ 767
 ** md - 768 ~ 991
 ** lg - 992 ~
 * @param selectedSize string (sm / md / lg)
 * @returns matched media query
 */
export const getResponsiveMediaQuery = (selectedSize: string): string => {
  switch (selectedSize) {
    case 'sm':
      // 0 ~ 767
      return `@media screen and (max-width: ${responsiveSize.sm})`;
    case 'md':
      // 768 ~ 991
      return `@media screen and (min-width: ${responsiveSize.sm}) and (max-width: ${responsiveSize.lg})`;
    case 'lg':
      // 992 ~
      return `@media screen and (min-width: ${responsiveSize.lg})`;
    default:
      return '';
  }
};

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px; // default font size
    color: ${colorStyle.dark};
    // display: flex;
    // justify-content: center;

    a {
      text-decoration: none;
      color: ${colorStyle.dark};
    }
  }

  /* Not show scroll bar, but make it work */
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;

export default GlobalStyle;
