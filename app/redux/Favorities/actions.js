/*
 *
 * Favorite actions
 *
 */

import * as types from './types';

export function addFavorite(newFavorite) {
  return {
    type: types.ADD_FAVORITE,
    value: newFavorite,
  };
}

export function removeFavorite(favoriteId) {
  return {
    type: types.REMOVE_FAVORITE,
    value: favoriteId,
  };
}

export function clearFavorites() {
  return {
    type: types.CLEAR_FAVORITES,
    value: null,
  };
}
