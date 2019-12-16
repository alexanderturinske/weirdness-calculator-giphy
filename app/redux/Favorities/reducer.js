/*
 *
 * Favorites reducer
 *
 */
import * as types from './types';

export const initialState = {
  favorites: {},
};

/* eslint-disable default-case, no-param-reassign */
const favoritesReducer = (state = initialState, action) => {
  const { value } = action;
  const favorites = { ...state.favorites };
  switch (action.type) {
    case types.ADD_FAVORITE:
      favorites[value.gif.id] = value;
      return { ...state, favorites };
    case types.REMOVE_FAVORITE:
      delete favorites[value];
      return { ...state, favorites };
    case types.CLEAR_FAVORITES:
      return initialState;
    default:
      return state;
  }
};

export default favoritesReducer;
