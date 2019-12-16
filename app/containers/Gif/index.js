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
  const { id, title, images } = gif;
  const alt = `weirdness-level-${weirdness}`;
  const caption = `${weirdness}\\${maxWeirdness}`;

  return (
    <div key={id}>
      <div>{title}</div>
      <img src={images.fixed_height_downsampled.url} alt={alt} />
      {options.showCaption && <div>{caption}</div>}
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
