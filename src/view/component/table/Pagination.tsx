import React from 'react';
import { colorStyle } from 'Styled.GlobalStyle';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { PAGE_CONST } from 'service/const/general';
import Button from 'view/component/common/button/Button';
import useAppSelector from 'service/hook/useAppSelector';
import { useAppDispatch } from 'service/hook/useAppDispatch';
import { clickPageNavigation } from 'view/redux/order/orderAction';
import * as Styled from 'view/component/table/Styled.Pagination';

const { GO_FIRST_PAGE, GO_PREVIOUS_PAGE, GO_NEXT_PAGE, GO_LAST_PAGE } = PAGE_CONST;

const Pagination = () => {
  const {
    tableData: { currentPage, totalPage },
  } = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();

  const clickPageNavigationFunc = (value: string) => {
    dispatch(clickPageNavigation(value));
  };

  return (
    <Styled.Pagination data-testid="pagination-component">
      <Button
        dataTestId="pagination-go-first-button"
        width="27px"
        height="32px"
        color={currentPage > 0 ? colorStyle.dark : colorStyle.darkGray}
        backgroundColor={colorStyle.white}
        hoverBackgroundColor={currentPage > 0 ? colorStyle.deepGray : colorStyle.white}
        border={`1px solid ${colorStyle.lightGray}`}
        borderRadius={`5px 0 0 5px`}
        cursorActive={currentPage > 0 ? true : false}
        onClickFunc={() => currentPage > 0 && clickPageNavigationFunc(GO_FIRST_PAGE)}
      >
        <MdKeyboardDoubleArrowLeft className="pagination-icon" />
      </Button>
      <Button
        dataTestId="pagination-go-previous-button"
        width="27px"
        height="32px"
        color={currentPage > 0 ? colorStyle.dark : colorStyle.darkGray}
        backgroundColor={colorStyle.white}
        hoverBackgroundColor={currentPage > 0 ? colorStyle.deepGray : colorStyle.white}
        border={`1px solid ${colorStyle.lightGray}`}
        borderRadius={`none`}
        cursorActive={currentPage > 0 ? true : false}
        onClickFunc={() => currentPage > 0 && clickPageNavigationFunc(GO_PREVIOUS_PAGE)}
      >
        <MdKeyboardArrowLeft className="pagination-icon" />
      </Button>
      <Button
        dataTestId="pagination-current-page-button"
        width="27px"
        height="32px"
        hoverBackgroundColor={colorStyle.deepBlue}
        borderRadius={`none`}
        cursorActive={false}
      >
        {currentPage + 1}
      </Button>
      <Button
        dataTestId="pagination-go-next-button"
        width="27px"
        height="32px"
        color={currentPage === totalPage - 1 ? colorStyle.darkGray : colorStyle.dark}
        backgroundColor={colorStyle.white}
        hoverBackgroundColor={currentPage === totalPage - 1 ? colorStyle.white : colorStyle.deepGray}
        border={`1px solid ${colorStyle.lightGray}`}
        borderRadius={`none`}
        cursorActive={currentPage === totalPage - 1 ? false : true}
        onClickFunc={() => currentPage < totalPage - 1 && clickPageNavigationFunc(GO_NEXT_PAGE)}
      >
        <MdKeyboardArrowRight className="pagination-icon" />
      </Button>
      <Button
        dataTestId="pagination-go-last-button"
        width="27px"
        height="32px"
        color={currentPage === totalPage - 1 ? colorStyle.darkGray : colorStyle.dark}
        backgroundColor={colorStyle.white}
        hoverBackgroundColor={currentPage === totalPage - 1 ? colorStyle.white : colorStyle.deepGray}
        border={`1px solid ${colorStyle.lightGray}`}
        borderRadius={`0 5px 5px 0`}
        cursorActive={currentPage === totalPage - 1 ? false : true}
        onClickFunc={() => currentPage < totalPage - 1 && clickPageNavigationFunc(GO_LAST_PAGE)}
      >
        <MdKeyboardDoubleArrowRight className="pagination-icon" />
      </Button>
      <div className="show-page-status">
        Page {currentPage + 1} of {totalPage}
      </div>
    </Styled.Pagination>
  );
};

export default Pagination;
