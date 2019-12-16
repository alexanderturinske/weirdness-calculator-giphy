import React from 'react';
import Gif from '../Gif';

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
