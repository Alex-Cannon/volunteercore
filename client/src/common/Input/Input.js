import React from 'react';
import './Input.scss';

export default ({ autoComplete, inputGroupClass, inputClass, type, label, name, onFocus, onBlur, placeholder, required, setValue, value}) => {
  return (
    <div className={inputGroupClass || "input-group"}>
      {(() => {
        if (type === 'submit') return '';
        if (label === null) return '';
        return <label>{(required ? '* ' : '') + (label || placeholder || 'Field')}</label>;
      })()}
      <input
        autoComplete={autoComplete}
        className={inputClass || "input"}
        name={name || label || placeholder || 'undefined'}
        onBlur={onBlur || null}
        onFocus={onFocus || null}
        placeholder={placeholder || ("Enter " + (label || "Field"))}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}