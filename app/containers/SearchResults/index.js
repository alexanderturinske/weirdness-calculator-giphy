/*
 * SearchResults
 *
 * The Search Results from the Giphy API, ordered by weirdness
 *
 */
import './searchResults.scss';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import { maxWeirdness } from '../../constants';
import messages from './messages';
import { createGifComponents } from './utils';
import reduxInfo from '../../redux';

export default function SearchResults() {
  const distpatch = useDispatch();
  const favorites = useSelector(state => state.favorites.favorites);
  const gifs = useSelector(state => state.giphy.gifs);
  const [weirdness, setWeirdness] = useState(0);

  const handleLike = () => {
    distpatch(
      reduxInfo.actions.addFavorite({ gif: gifs[weirdness], weirdness }),
    );
  };

  const isFavorite = Object.keys(gifs).length && favorites[gifs[weirdness].id];

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
