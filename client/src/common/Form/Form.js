import React from 'react';

export default ({ children, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      { children }
    </form>
  )
}