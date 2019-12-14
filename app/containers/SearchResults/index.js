/*
 * SearchResults
 *
 * The Search Results from the Giphy API, ordered by weirdness
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function SearchForm() {
  const handleLike = () => {
    // add gif to store.favorites
  };

  return (
    <div className="search-results-container">
      <h2>
        <FormattedMessage {...messages.title} />
      </h2>
      <button type="submit" onClick={handleLike}>
        Like
      </button>
      <div>
        <FormattedMessage {...messages.sliderTitle} values={{ value: 0 }} />
      </div>
    </div>
  );
}
