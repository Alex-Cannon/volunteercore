import React from 'react';
import './Input.scss';

export default ({ inputClass, type, label, name, placeholder, required, setValue, value}) => {
  return (
    <div className="input-group">
      {(() => {
        if (type === 'submit') return '';
        if (label === null) return '';
        return <label>{(required ? '* ' : '') + (label || placeholder || 'Field')}</label>;
      })()}
      <input
        className={"input" || inputClass}
        name={name || label || placeholder || 'undefined'}
        placeholder={placeholder || ("Enter " + (label || "Field"))}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}