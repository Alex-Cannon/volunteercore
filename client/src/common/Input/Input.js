import React from 'react';
import './Input.scss';

export default ({ flex, margin, type, label, name, placeholder, required, setValue, value}) => {
  return (
    <div className="input-group" style={{ flex: flex || 1, marginBottom: margin || '1em' }}>
      {(() => {
        if (type === 'submit') return '';
        if (label === null) return '';
        return <label>{(required ? '* ' : '') + (label || placeholder || 'Field')}</label>;
      })()}
      <input
        className="input"
        name={name || label || placeholder || 'undefined'}
        placeholder={placeholder || ("Enter " + (label || "Field"))}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}