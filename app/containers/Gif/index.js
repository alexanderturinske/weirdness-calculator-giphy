/*
 * Gif
 *
 * The Gif component
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { maxWeirdness } from '../../constants';

export default function Gif({ gif, weirdness, options = {} }) {
  const { id, images } = gif;
  const title = gif.title === '' ? 'No Title Available' : gif.title;
  const alt = `weirdness-level-${weirdness}`;
  const caption = `${weirdness}\\${maxWeirdness}`;

  return (
    <div key={id}>
      <div>{title}</div>
      <img src={images.fixed_height_downsampled.url} alt={alt} />
      {options.showCaption && <div>{caption}</div>}
      {options.showLike && (
        <div>
          <button
            type="submit"
            onClick={options.showLike.onClick}
            disabled={options.showLike.isDisabled}
          >
            Like
          </button>
        </div>
      )}
    </div>
  );
}

Gif.propTypes = {
  // The Gif object from the GIPHY API
  gif: PropTypes.object,
  // Additional options for this gif (i.e. showCaption)
  options: PropTypes.object,
  // The weirdness rating of the gif, 1 through maxWeirdness
  weirdness: PropTypes.number,
};
