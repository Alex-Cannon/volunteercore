import React from 'react';

export const ExternalLink = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer noopener">
      { children }
    </a>
  );
}