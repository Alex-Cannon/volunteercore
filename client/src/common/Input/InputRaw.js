import React from 'react';
import './Input.scss';

export default ({ inputClass, type, label, name, placeholder, required, setValue, value}) => {
  return (
      <input
        className={inputClass || "input"}
        name={name || label || placeholder || 'undefined'}
        placeholder={placeholder || ("Enter " + (label || "Field"))}
        required={required}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
  );
}