import React from 'react';
import './SearchBar.scss';

import Form from '../../common/Form/Form';
import Input from '../../common/Input/Input';

export default () => {
  return (
    <div className="search-bar">
      <Form className="search-bar-form">
        <Input
          flex={3}
          label={null}
          name="query"
          placeholder="Search Opportunities"
        />
        <Input
          type="submit"
        />
      </Form>
    </div>
  )
}