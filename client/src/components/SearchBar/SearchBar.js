import React from 'react';
import './SearchBar.scss';

import { Link } from 'react-router-dom';

import Form from '../../common/Form/Form';
import InputRaw from '../../common/Input/InputRaw';

export default ({ addLink, onSubmit, placeholder, value, setValue }) => {
  return (
    <div className="search-bar">
      <Form className="search-bar-form" onSubmit={onSubmit}>
        <InputRaw
          name="query"
          placeholder={placeholder}
          value={value || ''}
          setValue={setValue}
        />
        <InputRaw
          type="submit"
          value="Search"
        />
        <Link className="search-bar-post-btn btn btn-info" to={addLink}>Post</Link>
      </Form>
    </div>
  )
}