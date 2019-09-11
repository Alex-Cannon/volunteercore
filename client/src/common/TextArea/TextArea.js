import React from 'react';
import './TextArea.scss';

export const TextArea = (props) => {
  const { label, placeholder, required, setValue, value } = props;

  return (
    <div className="input-group">
      {label ? <label>{ (required ? "* " : "") + label}</label> : ""}
      <textarea
        className="textarea"
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default TextArea;