import React from 'react';
import RowCount from 'view/component/table/RowCount';
import TableComp from 'view/component/table/TableComp';
import Button from 'view/component/common/button/Button';
import * as Styled from 'view/component/table/Styled.TableContainer';

const TableContainer = () => {
  return (
    <>
      <Styled.TableContainer>
        <Button dataTestId="remove-button" text="삭제" />
        <RowCount />
        <TableComp />
      </Styled.TableContainer>
    </>
  );
};

export default TableContainer;
