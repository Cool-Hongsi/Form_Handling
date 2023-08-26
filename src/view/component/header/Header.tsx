import React from 'react';
import Logo from 'resource/asset/logo.jpg';
import * as Styled from 'view/component/header/Styled.Header';

const Header = () => {
  return (
    <Styled.Header data-testid="header-component">
      <img src={Logo} alt="Logo" data-testid="logo" className="logo" />
    </Styled.Header>
  );
};

export default Header;
