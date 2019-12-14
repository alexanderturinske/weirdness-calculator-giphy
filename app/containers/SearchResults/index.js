/*
 * SearchResults
 *
 * The Search Results from the Giphy API, ordered by weirdness
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux'
import messages from './messages';
import { createGifComponents } from './utils';

export default function SearchForm() {
  const gifs = useSelector(state => state.giphy.gifs);
  const gifItems = createGifComponents(gifs);

  const handleLike = () => {
    // add gif to store.favorites
  };

  return (
    <div className="search-results-container">
      <h2>
        <FormattedMessage {...messages.title} />
      </h2>
      {gifItems}
      <button type="submit" onClick={handleLike}>
        Like
      </button>
      <div>
        <FormattedMessage {...messages.sliderTitle} values={{ value: 0 }} />
      </div>
    </div>
  );
}
