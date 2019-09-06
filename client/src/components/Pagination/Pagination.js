import React from 'react';
import './Pagination.scss';

export const Pagination = ({ query, nextPageAction }) => {
  if (!query.data || !query.options) return '';
  let { page, total_pages } = query.data._meta;

  const getPages = () => {
    let pages = [page];

    for (let i = page + 1; i <= page + 2; i++) {
      if (i <= total_pages) { 
        pages.push(i); 
      } else {
        pages.push('X');
      }
    }

    for (let i = page - 1; i >= page - 2; i--) {
      if (i > 0) {
        pages.unshift(i);
      } else {
        pages.unshift('X');
      }
    }

    return pages.map((pageNum, i) => {
      if (pages.indexOf(page) === i) {
        return <button className="pagination-current-page page-btn" onClick={() => nextPageAction(pageNum)} key={pageNum + i + "pagination"}>{pageNum}</button>
      }
      if (pageNum === 'X') {
        return <button className="page-btn btn-disabled" key={pageNum + i + "pagination"}>{pageNum}</button>
      }
      return (
        <button className="page-btn" onClick={() => nextPageAction(pageNum)} key={pageNum + i + "pagination"}>{pageNum}</button>
      );
    });
  }

  return (
    <div className="pagination-container">
      <button className="page-btn" onClick={() => nextPageAction(1)}>&lt;&lt;</button>
      <button className="page-btn" onClick={() => nextPageAction(page - 1 > 0 ? page - 1 : 1)}>&lt;</button>
      {getPages()}
      <button className="page-btn" onClick={() => nextPageAction(page + 1 <= total_pages ? page + 1 : total_pages)}>&gt;</button>
      <button className="page-btn" onClick={() => nextPageAction(total_pages)}>&gt;&gt;</button>
    </div>
  )
}

export default Pagination;