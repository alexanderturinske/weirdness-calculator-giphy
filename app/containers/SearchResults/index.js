/*
 * SearchResults
 *
 * The Search Results from the Giphy API, ordered by weirdness
 *
 */

// Styling
import './searchResults.scss';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

// Dependencies
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';

// Components
import { maxWeirdness } from '../../constants';
import messages from './messages';
import { createGifComponents } from './utils';
import reduxInfo from '../../redux';

export default function SearchResults() {
  const distpatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const gifs = useSelector(state => state.giphy.gifs);
  const [weirdness, setWeirdness] = useState(0);

  /**
   * Adds the GIF to the favorite-part of the Redux store
   */
  const handleLike = () => {
    distpatch(
      reduxInfo.actions.addFavorite({ gif: gifs[weirdness], weirdness }),
    );
  };

  /**
   * Disables the Like button if the GIF is already favorited
   */
  const isFavorite = Object.keys(gifs).length && favorites[gifs[weirdness].id];

  /**
   * Sets the weirdness level to the slider return value
   * @param {Number} event the number the user choose
   */
  const onSlide = event => {
    setWeirdness(event);
  };

  const gifItems = createGifComponents(gifs, handleLike, isFavorite);

  return (
    <div className="searchresults-container">
      <h2>
        <FormattedMessage {...messages.title} />
      </h2>
      {gifItems[weirdness]}
      <div className="slidecontainer">
        <Slider
          min={0}
          max={maxWeirdness}
          defaultValue={weirdness}
          onChange={onSlide}
        />
      </div>
      <div>
        <FormattedMessage {...messages.sliderTitle} values={{ value: 0 }} />
      </div>
    </div>
  );
}
