import React from 'react';
import './Input.scss';

export default ({ type, label, placeholder, setValue, value}) => {
  return (
    <div className="input-group">
      {type === 'submit' ? '' : (
        <label>{label || placeholder || 'Field'}</label>
      )}
      <input
        className="input"
        placeholder={placeholder || ("Enter " + (label || "Field"))}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}