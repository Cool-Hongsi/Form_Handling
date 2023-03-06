import React from 'react';
import Header from 'view/component/header/Header';
import FormContainer from 'view/component/form';
import TableContainer from 'view/component/table';
import * as Styled from 'Styled.App';

const App = () => {
  return (
    <Styled.App data-testid="app-component">
      <Header />
      <FormContainer />
      <TableContainer />
    </Styled.App>
  );
};

export default App;
