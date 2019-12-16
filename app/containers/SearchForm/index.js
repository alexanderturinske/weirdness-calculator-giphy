/*
 * SearchForm
 *
 * The Search Form fields
 *
 */
import './searchForm.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import reduxInfo from '../../redux';
const {
  actions: { fetchGifs },
} = reduxInfo;

export default function SearchForm() {
  const dispatch = useDispatch();
  const [current, setState] = useState('');

  const changeInput = event => {
    setState(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(fetchGifs(current));
  };

  return (
    <div className="searchform-container">
      <form onSubmit={handleSubmit}>
        <label>
          <FormattedMessage {...messages.title} />
          <input value={current} onChange={changeInput} />
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
