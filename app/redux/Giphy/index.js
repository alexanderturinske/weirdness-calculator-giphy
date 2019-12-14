/*
 *
 * Giphy
 *
 */
import giphyReducer from './reducer';
import * as giphyActions from './actions';

import fetchGifs from './fetchGifs.saga';
const giphySagas = {
  fetchGifs,
};

export { giphyReducer, giphyActions, giphySagas };
