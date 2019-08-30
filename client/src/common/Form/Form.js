import React from 'react';

export default ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      { children }
    </form>
  )
}