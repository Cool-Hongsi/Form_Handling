import React, { useEffect, useState } from 'react';
import RowCount from 'view/component/table/RowCount';
import TableComp from 'view/component/table/TableComp';
import Button from 'view/component/common/button/Button';
import Pagination from 'view/component/table/Pagination';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import { deleteOrderRequest } from 'view/redux/order/orderAction';
import useAppSelector from 'service/hook/useAppSelector';
import Modal from 'view/component/common/modal/Modal';
import * as Styled from 'view/component/table/Styled.TableContainer';

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
    <>
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
    </>
  );
};

export default TableContainer;
