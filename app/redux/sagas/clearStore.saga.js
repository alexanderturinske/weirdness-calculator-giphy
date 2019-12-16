import { put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';
import { giphyActions } from '../Giphy';
import { favoritesActions } from '../Favorities';

/**
 * Clears the GIFs returned from the GIPHY API and all favorited GIFs
 */
function* clearStoreSaga() {
  yield put(giphyActions.clearGifs());
  yield put(favoritesActions.clearFavorites());
}

function* clearStore() {
  yield takeEvery(types.CLEAR_STORE, clearStoreSaga);
}

export default clearStore;
