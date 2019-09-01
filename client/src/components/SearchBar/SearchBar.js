import React from 'react';
import './SearchBar.scss';

import { Link } from 'react-router-dom';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

export default ({ addLink, onSubmit, placeholder }) => {
  return (
    <div className="search-bar">
      <Form className="search-bar-form" onSubmit={onSubmit}>
        <Input
          flex={4}
          margin="0"
          label={null}
          name="query"
          placeholder={placeholder}
        />
        <Input
          flex={1}
          type="submit"
          value="Search"
          margin="0"
        />
        <Link className="search-bar-post-btn btn-info" to={addLink}>Post</Link>
      </Form>
    </div>
  )
}