import React from 'react';
import './Pagination.scss';

export default (props) => {
  if (!props._meta) return '';
  const { _meta, nextPageAction } = props;
  const { page, total_pages } = _meta;

  const getPages = () => {
    let pages = [page - 2, page - 1, page, page + 1, page + 2];
    return pages.filter((pageNum) => {
      return pageNum > 0 && pageNum <= total_pages;
    }).map((pageNum, i) => {
      return (
        <button onClick={() => nextPageAction(pageNum)} key={pageNum + i + "pagination"}>{pageNum}</button>
      );
    });
  }

  return (
    <div className="pagination-container">
      <button onClick={() => nextPageAction(1)}>&lt;&lt;</button>
      <button onClick={() => nextPageAction(page - 1)}>&lt;</button>
      {getPages()}
      <button onClick={() => nextPageAction(page + 1)}>&gt;</button>
      <button onClick={() => nextPageAction(total_pages)}>&gt;&gt;</button>
    </div>
  )
}