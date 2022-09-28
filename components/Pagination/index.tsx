import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MaterialIcon from "../MaterialIcon";

export interface PaginationItemProps {
  active?: boolean;
  onClick?: (page: number) => void;
}

export interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onItemClick: (page: number) => void;
  maxPages?: number;
}

const PaginationContainer = styled.div`
  font-family: "Montserrat";
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

const PaginationItem = styled.div<PaginationItemProps>`
  padding: 0.5rem;

  ${(props) => props.active && "background-color: #eee;"}

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #000;
    background-color: #ddd;
  }
`;

const PageInput = styled.input`
  font-family: "Montserrat";
  width: 32px;
  height: 32px;
  text-align: center;
  border: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

const PageSpan = styled.span`
  font-family: "Montserrat";
  width: 32px;
  height: 32px;
`;

interface PagesListProps {
  pages: number;
  current: number;
  onItemClick: (page: number) => void;
  maxPages?: number;
}
const PagesList = ({
  pages,
  current,
  onItemClick,
  maxPages = 5,
}: PagesListProps) => {
  const [allowEdit, setAllowEdit] = useState(false);
  const [currentPage, setPage] = useState(current);
  const [activePage, setActivePage] = useState(current);

  const onPageUpdated = (event) => {
    const newPage = event.target.value;
    const page = parseInt(newPage, 10);

    setActivePage(page);
  };

  const onChangePage = (page: number) => {
    setActivePage(page);
    setAllowEdit(false);
    setPage(page);
    onItemClick(page);
  };

  const onInputBlur = () => {
    console.log("focus change");
    setAllowEdit(false);
    onItemClick(activePage);
  };

  useEffect(() => {
    if (allowEdit) {
      return;
    }

    let newCurrentPage = currentPage;

    if (!activePage) {
      setActivePage(newCurrentPage);
    } else {
      newCurrentPage = activePage;
    }

    setPage(newCurrentPage);
  }, [activePage, currentPage, setActivePage, allowEdit]);

  if (pages <= 0) {
    return null;
  }

  const pageItems = [];

  if (current > 1) {
    pageItems.push(
      <PaginationItem onClick={() => onChangePage(current - 1)}>
        <MaterialIcon iconName="chevron_left" />
      </PaginationItem>
    );
  }

  // TODO: Handle item click and allow to update the current page
  pageItems.push(
    <PaginationItem onClick={() => setAllowEdit(true)}>
      {allowEdit ? (
        <PageInput
          type="number"
          value={activePage}
          onChange={onPageUpdated}
          min="1"
          max={pages}
          onBlur={onInputBlur}
        />
      ) : (
        <PageSpan>{currentPage}</PageSpan>
      )}
      {` of ${pages} pages`}
    </PaginationItem>
  );

  if (current !== pages) {
    pageItems.push(
      <PaginationItem onClick={() => onChangePage(current + 1)}>
        <MaterialIcon iconName="chevron_right" />
      </PaginationItem>
    );
  }

  return <>{pageItems}</>;
};

const Pagination = ({
  total,
  pageSize,
  current,
  onItemClick,
}: PaginationProps) => {
  const pages = Math.ceil(total / pageSize);
  return (
    <PaginationContainer>
      <PagesList pages={pages} current={current} onItemClick={onItemClick} />
    </PaginationContainer>
  );
};

const PaginationWrapper = (props: PaginationProps) => {
  const [current, setCurrent] = useState(1);

  const onItemClick = (page: number) => {
    setCurrent(page);
    props.onItemClick(page); // TODO: call refresh action on the parent component
  };
  return <Pagination {...props} current={current} onItemClick={onItemClick} />;
};

export default PaginationWrapper;
