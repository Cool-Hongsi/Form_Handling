import React from 'react';
import Header from 'view/component/header/Header';
import FormComp from 'view/component/form';
import Table from 'view/component/table/Table';
import * as Styled from 'Styled.App';

const App = () => {
  return (
    <Styled.App data-testid="app-component">
      <Header />
      <FormComp />
      <Table />
    </Styled.App>
  );
};

export default App;
