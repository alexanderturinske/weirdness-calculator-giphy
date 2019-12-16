// Dependencies
import React from 'react';

// Components
import Gif from '../Gif';

/**
 * Creates the list of GIF comonents for each GIF
 * @param {Object} gifs result gifs from user search as { id: GIF ... }
 * @param {Function} onClick callback for Liking a GIF
 * @param {boolean} isDisabled whether the Libe button should be disabled
 */
export const createGifComponents = (gifs, onClick, isDisabled) => {
  const showLike = { onClick, isDisabled };
  const gifItems = [];
  for (let i = 0; i < Object.keys(gifs).length; i++) {
    gifItems.push(
      <Gif gif={gifs[i]} weirdness={i} key={i} options={{ showLike }} />,
    );
  }
  return gifItems;
};
