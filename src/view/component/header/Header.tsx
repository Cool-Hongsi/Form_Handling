import React from 'react';
import Logo from 'resource/asset/timf_logo.png';
import * as Styled from 'view/component/header/Styled.Header';

const Header = () => {
  return (
    <Styled.Header data-testid="header-component">
      <img src={Logo} alt="Logo" data-testid="logo" />
    </Styled.Header>
  );
};

export default Header;
