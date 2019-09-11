import React from 'react';
import './TextArea.scss';

export const TextArea = (props) => {
  const { label } = props;

  return (
    <div className="input-group">
      {label ? <label>{label}</label> : ""}
      <textarea
        className="textarea"
        {...props}
      />
    </div>
  );
}

export default TextArea;