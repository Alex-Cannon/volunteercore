import React from 'react';
import './TextArea.scss';

export const TextArea = (props) => {
  const { label, required } = props;

  return (
    <div className="input-group">
      {label ? <label>{ (required ? "* " : "") + label}</label> : ""}
      <textarea
        className="textarea"
        {...props}
      />
    </div>
  );
}

export default TextArea;