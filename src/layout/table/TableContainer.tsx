import React, { useEffect, useState } from 'react';
import RowCount from 'layout/table/RowCount';
import TableComp from 'layout/table/TableComp';
import Pagination from 'layout/table/Pagination';
import Button from 'component/button/Button';
import { useAppDispatch, useAppSelector } from 'store';
import { deleteOrderRequest } from 'redux/order/orderAction';
import Modal from 'component/modal/Modal';
import * as Styled from 'layout/table/TableContainer.styled';

const TableContainer = () => {
  const {
    deleteOrderApi: { result },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();

  const [deleteRequestModalToggle, setDeleteRequestModalToggle] = useState<boolean>(false);

  useEffect(() => {
    // Only call when deleteOrderApi.result value is not empty (means successfully called delete request api)
    result && setDeleteRequestModalToggle(true);
  }, [result]);

  const deleteOrder = () => {
    dispatch(deleteOrderRequest());
  };

  return (
    <div data-testid="tableContainer-component">
      <Styled.TableContainer>
        <Styled.TableTopSection>
          <Button dataTestId="delete-button" onClickFunc={deleteOrder}>
            삭제
          </Button>
          <RowCount />
        </Styled.TableTopSection>

        <TableComp />

        <Styled.TableBottomSection>
          <Pagination />
        </Styled.TableBottomSection>
      </Styled.TableContainer>

      {/* After Delete Request (Only show when delete request api is called successfully) */}
      {deleteRequestModalToggle && (
        <Modal
          dataTestId="delete-request-result-modal"
          confirmSection={true}
          onClickCloseFunc={() => setDeleteRequestModalToggle(false)}
        >
          <div className="delete-request-result-modal-title">삭제가 완료 되었습니다</div>
          <div>{result}</div>
        </Modal>
      )}
    </div>
  );
};

export default TableContainer;
