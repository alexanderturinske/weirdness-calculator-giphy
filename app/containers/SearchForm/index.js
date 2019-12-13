/*
 * SearchForm
 *
 * The Search Form fields
 *
 */

import React, { Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function SearchForm() {
  const [current, setState] = useState('');

  const changeInput = event => {
    setState(event.target.value);
  };

  const handleSubmit = () => {
    console.log('current: ', current);
    // do something with current
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          <FormattedMessage {...messages.title} />
          <input value={current} onChange={changeInput} />
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </Fragment>
  );
}
