import React from 'react';

export const createGifComponents = gifs => {
  const gifItems = [];
  for (let i = 0; i < Object.keys(gifs).length; i++) {
    const alt = `weirdness-level-${i}`;
    gifItems.push(
      <div key={gifs[i].id}>
        <div>{gifs[i].title}</div>
        <img src={gifs[i].images.original.url} alt={alt} />
      </div>,
    );
  }
  return gifItems;
};
