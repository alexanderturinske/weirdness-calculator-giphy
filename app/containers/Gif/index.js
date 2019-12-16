/*
 * Gif
 *
 * The Gif component
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function Gif({ gif, weirdness }) {
  const { id, title, images } = gif;
  const alt = `weirdness-level-${weirdness}`;

  return (
    <div key={id}>
      <div>{title}</div>
      <img src={images.original.url} alt={alt} />
    </div>
  );
}

Gif.propTypes = {
  // The Gif object from the GIPHY API
  gif: PropTypes.object,
  // The weirdness rating of the gif, 1 through maxWeirdness
  weirdness: PropTypes.number,
};
