import React from 'react';
import Logo from 'resource/asset/logo.jpg';
import * as Styled from 'layout/header/Header.styled';

const Header = () => {
  return (
    <Styled.Header data-testid="header-component">
      <div className="header-content">
        <img src={Logo} alt="Logo" data-testid="logo" className="logo" />
      </div>
    </Styled.Header>
  );
};

export default Header;
