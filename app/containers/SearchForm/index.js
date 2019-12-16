/*
 * SearchForm
 *
 * The Search Form fields
 *
 */

// Styling
import './searchForm.scss';

// Dependencies
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Components
import messages from './messages';
import reduxInfo from '../../redux';
const {
  actions: { fetchGifs },
} = reduxInfo;

export default function SearchForm() {
  const dispatch = useDispatch();
  const [currentInput, setInput] = useState('');

  /**
   * Updates the input state
   * @param {Object} event from the input change event
   */
  const changeInput = event => {
    setInput(event.target.value);
  };

  /**
   * Retrieves GIFs using the user's input and stores the results
   * in the redux store
   * @param {Object} event from the submit event
   */
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchGifs(currentInput));
  };

  return (
    <div className="searchform-container">
      <form onSubmit={handleSubmit}>
        <label>
          <FormattedMessage {...messages.title} />
          <input
            value={currentInput}
            onChange={changeInput}
            onSubmit={handleSubmit}
          />
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
