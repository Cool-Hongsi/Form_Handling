import React, { useEffect } from 'react';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import useAppSelector from 'service/hook/useAppSelector';
import { getOrderRequest, clickCheckBox, copyOrderForm } from 'view/redux/order/orderAction';
import { OrderModel } from 'service/model/order';
import { IoMdCheckmark, IoMdRemove } from 'react-icons/io';
import { CHECKBOX_CONST } from 'service/const/general';
import * as Styled from 'view/component/table/Styled.TableComp';

const { CLICK_ALL, CLICK_EACH } = CHECKBOX_CONST;

const tableHeaderList: string[] = ['이름', '휴대폰번호', '날짜', '품목', '물량', '출근지', '오더복사'];

const TableComp = () => {
  const dispatch = useAppDispatch();
  const {
    getOrderApi: { loading, error },
    tableData: { splittedResult, currentPage, deleteList },
  } = useAppSelector((state) => state.orderReducer);

  useEffect(() => {
    dispatch(getOrderRequest());
  }, [dispatch]);

  const clickCheckBoxFunc = (seqNo?: number) => {
    // Click Each CheckBox
    if (seqNo) {
      dispatch(clickCheckBox([seqNo], CLICK_EACH));
    }
    // Click All CheckBox
    else {
      const seqNoList: number[] = splittedResult[currentPage].map((row: OrderModel) => {
        return row.seqNo as number;
      });
      dispatch(clickCheckBox(seqNoList, CLICK_ALL));
    }
  };

  const copyOrderFormFunc = (row: OrderModel) => {
    const { loadPlace, ...rest } = row;
    dispatch(copyOrderForm({ baseForm: { ...rest }, loadForm: loadPlace }));
  };

  if (loading) {
    return <Styled.TableCompLoading>Loading...</Styled.TableCompLoading>;
  }

  if (error) {
    return <Styled.TableCompError>{error.message}</Styled.TableCompError>;
  }

  return (
    <Styled.TableComp>
      {splittedResult.length > 0 && (
        <table className="table-container">
          <thead>
            <tr>
              {/* CheckBox */}
              <th colSpan={1} className={'th-checkBox'}>
                <div
                  className={`checkBox-creator ${
                    deleteList.length === splittedResult[currentPage].length ? 'fill-background' : null
                  }`}
                  onClick={() => clickCheckBoxFunc()}
                >
                  {deleteList.length === splittedResult[currentPage].length ? (
                    <IoMdCheckmark />
                  ) : deleteList.length > 0 ? (
                    <IoMdRemove />
                  ) : null}
                  <span className="checkbox-tooltip">Toggle All Current Page Rows Selected</span>
                </div>
              </th>
              {/* General */}
              {tableHeaderList.map((tableHeader: string) => {
                return (
                  <th key={tableHeader} colSpan={1} className={'th-general'}>
                    {tableHeader}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {splittedResult[currentPage].map((row: OrderModel, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <div
                      className={`checkBox-creator ${
                        deleteList.includes(row.seqNo as number) ? 'fill-background' : null
                      }`}
                      onClick={() => clickCheckBoxFunc(row.seqNo)}
                    >
                      {deleteList.includes(row.seqNo as number) ? <IoMdCheckmark /> : null}
                      <span className="checkbox-tooltip">Toggle Row Selected</span>
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td>{row.phoneNumber}</td>
                  <td>
                    {row.fromDate} - {row.toDate}
                  </td>
                  <td>{row.item}</td>
                  <td>{row.supply}</td>
                  <td>{row.address}</td>
                  <td className="td-copy-order" onClick={() => copyOrderFormFunc(row)}>
                    오더복사
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Styled.TableComp>
  );
};

export default TableComp;
