/*
 *
 * Giphy saga actions
 *
 */

import * as types from './types';

export function fetchGifs(userInput) {
  return {
    type: types.GET_GIFS,
    value: userInput,
  };
}

export function addGifs(gifs) {
  return {
    type: types.ADD_GIFS,
    value: gifs,
  };
}

export function clearGifs() {
  return {
    type: types.CLEAR_GIFS,
    value: {},
  };
}
