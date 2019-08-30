import React from 'react';
import './Card.scss';

export default ({ children }) => {
  return (
    <div className="card">
      { children }
    </div>
  );
}