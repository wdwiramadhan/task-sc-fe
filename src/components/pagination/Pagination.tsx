import * as React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

interface PaginationProps {
  handleChange: any;
  totalPages: number;
}

const Pagination = ({ handleChange, totalPages }: PaginationProps) => {
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
      onPageChange={handleChange}
    />
  );
};

export default React.memo(Pagination);
