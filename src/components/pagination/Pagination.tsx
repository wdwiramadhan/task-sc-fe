import * as React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

interface PaginationProps {
  handlePageChange: ({ selected }: { selected: number }) => void;
  totalPages: number;
}

const Pagination = ({ handlePageChange, totalPages }: PaginationProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      breakLinkClassName="page-link"
      nextClassName="page-item-prevnext"
      nextLinkClassName="page-link"
      pageRangeDisplayed={3}
      pageCount={totalPages}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item-prevnext"
      previousLinkClassName="page-link"
      renderOnZeroPageCount={undefined}
      containerClassName="paginate"
      activeClassName="active"
      onPageChange={handlePageChange}
    />
  );
};

export default React.memo(Pagination);
