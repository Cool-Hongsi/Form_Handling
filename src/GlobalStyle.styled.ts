import { createGlobalStyle } from 'styled-components';
import NanumGothic from 'resource/font/NanumGothic-Regular.ttf';

export const globalHorizontalPadding = {
  web: '24px',
  mobile: '16px',
};

export const globalMaxWidth = '1500px';

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
  sm: '576px',
  md: '992px',
};

export const getResponsiveMediaQuery = (selectedSize: string): string => {
  switch (selectedSize) {
    case 'sm':
      // ~ 576
      return `@media screen and (max-width: ${responsiveSize.sm})`;
    case 'md':
      // 577 ~ 992
      return `@media screen and (min-width: ${responsiveSize.sm}) and (max-width: ${responsiveSize.md})`;
    case 'lg':
      // 993 ~
      return `@media screen and (min-width: ${responsiveSize.md})`;
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
    color: ${colorStyle.dark};
    background-color: ${colorStyle.white};

    a {
      text-decoration: none;
      color: ${colorStyle.dark};
    }
  }

  :root {
    font-size: 16px; // default font size
  }

  /* Not show scroll bar, but make it work */
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;

export default GlobalStyle;
