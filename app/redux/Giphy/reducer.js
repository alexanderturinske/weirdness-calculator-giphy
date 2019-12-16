/*
 *
 * Giphy reducer
 *
 */
import * as types from './types';

export const initialState = {
  gifs: {},
};

/* eslint-disable default-case, no-param-reassign */
const giphyReducer = (state = initialState, action) => {
  const { value } = action;
  switch (action.type) {
    case types.ADD_GIFS:
      return { ...state, gifs: value };
    case types.CLEAR_GIFS:
      return initialState;
    default:
      return state;
  }
};

export default giphyReducer;
