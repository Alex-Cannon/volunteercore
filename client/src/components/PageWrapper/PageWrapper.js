import React from 'react';
import './PageWrapper.scss';

export default ({ children }) => {
  return (
    <main className="page-wrapper">
      { children }
    </main>
  );
}