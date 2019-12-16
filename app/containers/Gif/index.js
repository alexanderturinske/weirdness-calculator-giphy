/*
 * Gif
 *
 * Displays the GIFs and a variety of actions that can be taken
 * on the GIFs, which is determined by the options passed in
 *
 */
// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { maxWeirdness } from '../../constants';

// Styling
// TODO: Style this component

export default function Gif({ gif, weirdness, options = {} }) {
  const { id, images } = gif;
  const title = gif.title === '' ? 'No Title Available' : gif.title;
  const alt = `weirdness-level-${weirdness}`;
  const caption = `${weirdness}\\${maxWeirdness}`;

  return (
    <div key={id}>
      {options.allowRemoval && (
        <div>
          <button type="submit" onClick={() => options.allowRemoval(id)}>
            X
          </button>
        </div>
      )}
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
  // Additional options for this gif
  // showCaption: to show the weirdness level
  // showLike: to allow adding the GIF to the favorites
  // allowRemoval: to remove the GIF from the favorites
  // TODO: Add further props validation on the object using shape
  options: PropTypes.object,
  // The weirdness rating of the gif, 1 through maxWeirdness
  weirdness: PropTypes.number,
};
