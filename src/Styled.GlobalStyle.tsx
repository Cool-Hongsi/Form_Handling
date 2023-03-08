import { createGlobalStyle } from 'styled-components';
import NanumGothic from 'resource/font/NanumGothic-Regular.ttf';

/**
 * Get global padding
 ** header (10px)
 ** body (1.6rem)
 */
export const globalPadding = {
  header: '10px',
  body: '1.6rem',
};

export const colorStyle = {
  dark: '#212529',
  white: '#FFFFFF',
  lightGray: '#CED4DA',
  mediumGray: '#E9ECEF',
  darkGray: '#A3A3A3',
  deepGray: '#DEE2E6',
  lightRed: '#D62518',
  red: '#FF0000',
  deepBlue: '#2C3E76',
  deepBlueHover: '#253564',
  gray: '#CECECE',
  blue: '#0D6EFD',
};

export const responsiveSize = {
  sm: '767.98px',
  md: '991.98px',
  lg: '992px',
};

/**
 * Get specific responsive media query
 ** sm - 0 ~ 767.98
 ** md - 767.99 ~ 991.98
 ** lg - 992 ~
 * @param selectedSize string (sm / md / lg)
 * @returns matched media query
 */
export const getResponsiveMediaQuery = (selectedSize: string): string => {
  switch (selectedSize) {
    case 'sm':
      // 0 ~ 767.98
      return `@media screen and (max-width: ${responsiveSize.sm})`;
    case 'md':
      // 767.99 ~ 991.98
      return `@media screen and (min-width: ${responsiveSize.sm}) and (max-width: ${responsiveSize.md})`;
    case 'lg':
      // 992 ~
      return `@media screen and (min-width: ${responsiveSize.lg})`;
    default:
      return '';
  }
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: NanumGothic;
    src: url(${NanumGothic}) format('truetype');
  }
  
  *, :after, :before {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: NanumGothic;
    font-size: 16px; // default font size
    color: ${colorStyle.dark};

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
