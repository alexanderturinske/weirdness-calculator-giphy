import React from 'react';
import Gif from '../Gif';

export const createGifComponents = gifs => {
  const gifItems = [];
  for (let i = 0; i < Object.keys(gifs).length; i++) {
    gifItems.push(<Gif gif={gifs[i]} weirdness={i} key={i} />);
  }
  return gifItems;
};
