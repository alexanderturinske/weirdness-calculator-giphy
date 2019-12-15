/*
 * SearchResults
 *
 * The Search Results from the Giphy API, ordered by weirdness
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import messages from './messages';
import { createGifComponents } from './utils';
import reduxInfo from '../../redux';

export default function SearchResults() {
  const distpatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const gifs = useSelector(state => state.giphy.gifs);
  const gifItems = createGifComponents(gifs);

  // TODO: Break out Like button into its own component so that SearhResults does not rerender
  // on liking something, which unnecessarily runs createGifComponents, which is semi-expensive
  const handleLike = () => {
    distpatch(reduxInfo.actions.addFavorite({ gif: gifs[0], weirdness: 0 }));
  };

  const isFavorite = gifs[0] && favorites[gifs[0].id];
  return (
    <div className="search-results-container">
      <h2>
        <FormattedMessage {...messages.title} />
      </h2>
      {gifItems}
      <button type="submit" onClick={handleLike} disabled={isFavorite}>
        Like
      </button>
      <div>
        <FormattedMessage {...messages.sliderTitle} values={{ value: 0 }} />
      </div>
    </div>
  );
}
