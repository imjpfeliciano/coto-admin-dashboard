import React, { useEffect, useState } from "react";
import MaterialIcon from "../MaterialIcon";
import {
  PaginationContainer,
  PaginationItem,
  PageInput,
  PageSpan,
} from "./pagination.styled";
import { PaginationProps, PagesListProps } from "./pagination.types";

const PagesList = ({ pages, current, onItemClick }: PagesListProps) => {
  const [allowEdit, setAllowEdit] = useState(false);
  const [currentPage, setPage] = useState(current);
  const [activePage, setActivePage] = useState(current);

  const onPageUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = event.target.value;
    const page = parseInt(newPage, 10);

    if (page > 0 && page <= pages) {
      setActivePage(page);
    }
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
