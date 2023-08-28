import React from 'react';
import Header from 'layout/header/Header';
import FormContainer from 'layout/form/FormContainer';
import TableContainer from 'layout/table/TableContainer';
import * as Styled from 'layout/Layout.styled';

const Layout = () => {
  return (
    <Styled.Layout>
      <Header />
      <main>
        <FormContainer />
        <TableContainer />
      </main>
    </Styled.Layout>
  );
};

export default Layout;
