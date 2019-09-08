import React from 'react';

export const SelectOne = ({ options }) => {
  return (
    <select>
      {options.map(option => {
        return <option>{option}</option>
      })}
    </select>
  );
}

export default SelectOne;